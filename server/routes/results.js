import { Router } from "express";
import { z } from "zod";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

const resultSchema = z.object({
  topic: z.string().trim().min(1).max(50),
  correct: z.number().int().min(0),
  total: z.number().int().min(1),
});

router.post("/", requireAuth, async (req, res) => {
  const parsed = resultSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Datos inválidos" });
  }
  const { topic, correct, total } = parsed.data;
  if (correct > total) {
    return res.status(400).json({ error: "correct no puede ser mayor que total" });
  }

  const [result] = await pool.query(
    "INSERT INTO quiz_results (user_id, topic, correct, total) VALUES (?, ?, ?, ?)",
    [req.user.id, topic, correct, total]
  );
  res.status(201).json({ id: result.insertId, topic, correct, total });
});

router.get("/", requireAuth, async (req, res) => {
  const [rows] = await pool.query(
    "SELECT id, topic, correct, total, taken_at FROM quiz_results WHERE user_id = ? ORDER BY taken_at DESC, id DESC LIMIT 50",
    [req.user.id]
  );
  res.json(rows);
});

export default router;
