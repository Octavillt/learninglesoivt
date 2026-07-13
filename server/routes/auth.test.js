import { describe, it, expect, beforeEach, afterAll } from "vitest";
import request from "supertest";
import { app } from "../app.js";
import { pool } from "../db.js";
import { resetDb } from "../test/helpers.js";

const VALID_USER = { email: "alice@example.com", password: "password123", displayName: "Alice" };

beforeEach(resetDb);
afterAll(async () => {
  await resetDb();
  await pool.end();
});

describe("POST /api/auth/register", () => {
  it("crea un usuario nuevo y devuelve una cookie de sesión", async () => {
    const res = await request(app).post("/api/auth/register").send(VALID_USER);

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: expect.any(Number), email: VALID_USER.email, displayName: VALID_USER.displayName });
    expect(res.headers["set-cookie"][0]).toMatch(/^token=.+HttpOnly/);
  });

  it("nunca incluye el password ni su hash en la respuesta", async () => {
    const res = await request(app).post("/api/auth/register").send(VALID_USER);
    expect(JSON.stringify(res.body)).not.toMatch(/password/i);
  });

  it("rechaza un correo duplicado con 409", async () => {
    await request(app).post("/api/auth/register").send(VALID_USER);
    const res = await request(app).post("/api/auth/register").send(VALID_USER);

    expect(res.status).toBe(409);
    expect(res.body.error).toBeTruthy();
  });

  it("normaliza el correo a minúsculas antes de guardarlo", async () => {
    await request(app).post("/api/auth/register").send({ ...VALID_USER, email: "Alice@Example.com" });
    const dup = await request(app).post("/api/auth/register").send({ ...VALID_USER, email: "alice@example.com" });
    expect(dup.status).toBe(409);
  });

  it.each([
    ["password menor a 8 caracteres", { ...VALID_USER, password: "abc123" }],
    ["email con formato inválido", { ...VALID_USER, email: "no-es-un-correo" }],
    ["displayName vacío", { ...VALID_USER, displayName: "" }],
    ["falta el campo email", { password: VALID_USER.password, displayName: VALID_USER.displayName }],
  ])("rechaza con 400: %s", async (_label, payload) => {
    const res = await request(app).post("/api/auth/register").send(payload);
    expect(res.status).toBe(400);
  });

  it("resiste un intento de inyección SQL en el campo email", async () => {
    const res = await request(app).post("/api/auth/register").send({
      ...VALID_USER,
      email: "a'; DROP TABLE users; --@example.com",
    });
    expect(res.status).toBe(400);

    const stillWorks = await request(app).post("/api/auth/register").send(VALID_USER);
    expect(stillWorks.status).toBe(201);
  });
});

describe("POST /api/auth/login", () => {
  beforeEach(async () => {
    await request(app).post("/api/auth/register").send(VALID_USER);
  });

  it("inicia sesión con credenciales correctas", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });

    expect(res.status).toBe(200);
    expect(res.body.email).toBe(VALID_USER.email);
    expect(res.headers["set-cookie"][0]).toMatch(/^token=.+HttpOnly/);
  });

  it("rechaza contraseña incorrecta con 401 y no revela si el correo existe", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: "contraseña-incorrecta",
    });
    expect(res.status).toBe(401);

    const resUnknownEmail = await request(app).post("/api/auth/login").send({
      email: "no-existe@example.com",
      password: "cualquiera123",
    });
    expect(resUnknownEmail.status).toBe(401);
    expect(resUnknownEmail.body.error).toBe(res.body.error);
  });

  it("rechaza body vacío con 400", async () => {
    const res = await request(app).post("/api/auth/login").send({});
    expect(res.status).toBe(400);
  });
});

describe("POST /api/auth/logout", () => {
  it("limpia la cookie de sesión", async () => {
    const agent = request.agent(app);
    await agent.post("/api/auth/register").send(VALID_USER);

    const res = await agent.post("/api/auth/logout");
    expect(res.status).toBe(204);

    const me = await agent.get("/api/auth/me");
    expect(me.status).toBe(401);
  });
});

describe("Desactivación por inactividad (30 días)", () => {
  beforeEach(async () => {
    await request(app).post("/api/auth/register").send(VALID_USER);
  });

  async function setLastLogin(daysAgo) {
    await pool.query(
      "UPDATE users SET last_login_at = DATE_SUB(NOW(), INTERVAL ? DAY) WHERE email = ?",
      [daysAgo, VALID_USER.email]
    );
  }

  async function getUserRow() {
    const [rows] = await pool.query(
      "SELECT is_active, last_login_at FROM users WHERE email = ?",
      [VALID_USER.email]
    );
    return rows[0];
  }

  it("el registro deja last_login_at poblado y la cuenta activa", async () => {
    const row = await getUserRow();
    expect(row.is_active).toBe(1);
    expect(row.last_login_at).not.toBeNull();
  });

  it("un login exitoso actualiza last_login_at", async () => {
    await setLastLogin(5);
    const before = (await getUserRow()).last_login_at;

    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });
    expect(res.status).toBe(200);

    const after = (await getUserRow()).last_login_at;
    expect(new Date(after).getTime()).toBeGreaterThan(new Date(before).getTime());
  });

  it("con 29 días de inactividad todavía puede entrar", async () => {
    await setLastLogin(29);
    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });
    expect(res.status).toBe(200);
    expect((await getUserRow()).is_active).toBe(1);
  });

  it("con 31 días de inactividad el login se rechaza con 403 y la cuenta queda desactivada", async () => {
    await setLastLogin(31);
    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("Cuenta desactivada por inactividad");
    expect((await getUserRow()).is_active).toBe(0);
  });

  it("una cuenta ya desactivada no puede entrar aunque la contraseña sea correcta", async () => {
    await pool.query("UPDATE users SET is_active = 0 WHERE email = ?", [VALID_USER.email]);
    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });
    expect(res.status).toBe(403);
    expect(res.body.error).toBe("Cuenta desactivada por inactividad");
  });

  it("con contraseña incorrecta responde 401 genérico sin revelar que la cuenta está desactivada", async () => {
    await pool.query("UPDATE users SET is_active = 0 WHERE email = ?", [VALID_USER.email]);
    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: "contraseña-equivocada",
    });
    expect(res.status).toBe(401);
    expect(res.body.error).toBe("Correo o contraseña incorrectos");
  });

  it("reactivar la cuenta en la BD le permite volver a entrar", async () => {
    await setLastLogin(31);
    await request(app).post("/api/auth/login").send({ email: VALID_USER.email, password: VALID_USER.password });
    expect((await getUserRow()).is_active).toBe(0);

    // Reactivación manual (lo que harías en Workbench/phpMyAdmin)
    await pool.query("UPDATE users SET is_active = 1, last_login_at = NOW() WHERE email = ?", [VALID_USER.email]);

    const res = await request(app).post("/api/auth/login").send({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });
    expect(res.status).toBe(200);
  });
});

describe("GET /api/auth/me", () => {
  it("devuelve 401 sin cookie de sesión", async () => {
    const res = await request(app).get("/api/auth/me");
    expect(res.status).toBe(401);
  });

  it("devuelve 401 con una cookie de token manipulada/inválida", async () => {
    const res = await request(app).get("/api/auth/me").set("Cookie", "token=esto.no.es.valido");
    expect(res.status).toBe(401);
  });

  it("devuelve el usuario cuando la cookie de sesión es válida", async () => {
    const agent = request.agent(app);
    const registerRes = await agent.post("/api/auth/register").send(VALID_USER);

    const res = await agent.get("/api/auth/me");
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(registerRes.body.id);
    expect(res.body.email).toBe(VALID_USER.email);
  });
});
