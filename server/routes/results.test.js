import { describe, it, expect, beforeEach, afterAll } from "vitest";
import request from "supertest";
import { app } from "../app.js";
import { pool } from "../db.js";
import { resetDb } from "../test/helpers.js";

const USER_A = { email: "alice@example.com", password: "password123", displayName: "Alice" };
const USER_B = { email: "bob@example.com", password: "password123", displayName: "Bob" };

beforeEach(resetDb);
afterAll(async () => {
  await resetDb();
  await pool.end();
});

describe("POST /api/results", () => {
  it("rechaza guardar un resultado sin sesión con 401", async () => {
    const res = await request(app).post("/api/results").send({ topic: "mixed", correct: 5, total: 10 });
    expect(res.status).toBe(401);
  });

  it("guarda un resultado para el usuario autenticado", async () => {
    const agent = request.agent(app);
    await agent.post("/api/auth/register").send(USER_A);

    const res = await agent.post("/api/results").send({ topic: "numbers", correct: 8, total: 10 });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: expect.any(Number), topic: "numbers", correct: 8, total: 10 });
  });

  it("rechaza correct > total con 400", async () => {
    const agent = request.agent(app);
    await agent.post("/api/auth/register").send(USER_A);

    const res = await agent.post("/api/results").send({ topic: "mixed", correct: 15, total: 10 });
    expect(res.status).toBe(400);
  });

  it.each([
    ["total en cero", { topic: "mixed", correct: 0, total: 0 }],
    ["correct negativo", { topic: "mixed", correct: -1, total: 10 }],
    ["topic vacío", { topic: "", correct: 1, total: 1 }],
    ["falta el campo total", { topic: "mixed", correct: 1 }],
  ])("rechaza con 400: %s", async (_label, payload) => {
    const agent = request.agent(app);
    await agent.post("/api/auth/register").send(USER_A);

    const res = await agent.post("/api/results").send(payload);
    expect(res.status).toBe(400);
  });
});

describe("GET /api/results", () => {
  it("rechaza sin sesión con 401", async () => {
    const res = await request(app).get("/api/results");
    expect(res.status).toBe(401);
  });

  it("devuelve solo los resultados del usuario autenticado, más recientes primero", async () => {
    const agentA = request.agent(app);
    await agentA.post("/api/auth/register").send(USER_A);
    await agentA.post("/api/results").send({ topic: "numbers", correct: 5, total: 10 });
    await agentA.post("/api/results").send({ topic: "verbs", correct: 9, total: 10 });

    const agentB = request.agent(app);
    await agentB.post("/api/auth/register").send(USER_B);
    await agentB.post("/api/results").send({ topic: "fruits", correct: 1, total: 1 });

    const resA = await agentA.get("/api/results");
    expect(resA.status).toBe(200);
    expect(resA.body).toHaveLength(2);
    expect(resA.body.map(r => r.topic)).toEqual(["verbs", "numbers"]);
    expect(resA.body.every(r => r.topic !== "fruits")).toBe(true);

    const resB = await agentB.get("/api/results");
    expect(resB.body).toHaveLength(1);
    expect(resB.body[0].topic).toBe("fruits");
  });
});
