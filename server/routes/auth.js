import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

const INACTIVITY_DAYS = Number(process.env.INACTIVITY_DAYS || 30);

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const registerSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(72),
  displayName: z.string().trim().min(1).max(100),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
});

function issueToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, displayName: user.display_name },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

router.post("/register", async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Datos inválidos" });
  }
  const { email, password, displayName } = parsed.data;

  const [existing] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
  if (existing.length > 0) {
    return res.status(409).json({ error: "Ese correo ya está registrado" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    "INSERT INTO users (email, password_hash, display_name, last_login_at) VALUES (?, ?, ?, NOW())",
    [email, passwordHash, displayName]
  );

  const user = { id: result.insertId, email, display_name: displayName };
  const token = issueToken(user);
  res.cookie("token", token, COOKIE_OPTIONS);
  res.status(201).json({ id: user.id, email: user.email, displayName: user.display_name });
});

router.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Datos inválidos" });
  }
  const { email, password } = parsed.data;

  const [rows] = await pool.query(
    "SELECT id, email, password_hash, display_name, is_active, last_login_at FROM users WHERE email = ?",
    [email]
  );
  const user = rows[0];
  if (!user) {
    return res.status(401).json({ error: "Correo o contraseña incorrectos" });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: "Correo o contraseña incorrectos" });
  }

  // El estado de la cuenta solo se revela a quien tiene la contraseña correcta.
  if (!user.is_active) {
    return res.status(403).json({ error: "Cuenta desactivada por inactividad" });
  }

  const inactivityMs = INACTIVITY_DAYS * 24 * 60 * 60 * 1000;
  if (user.last_login_at && Date.now() - new Date(user.last_login_at).getTime() > inactivityMs) {
    await pool.query("UPDATE users SET is_active = 0 WHERE id = ?", [user.id]);
    return res.status(403).json({ error: "Cuenta desactivada por inactividad" });
  }

  await pool.query("UPDATE users SET last_login_at = NOW() WHERE id = ?", [user.id]);

  const token = issueToken(user);
  res.cookie("token", token, COOKIE_OPTIONS);
  res.json({ id: user.id, email: user.email, displayName: user.display_name });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", COOKIE_OPTIONS);
  res.status(204).end();
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email, displayName: req.user.displayName });
});

export default router;
