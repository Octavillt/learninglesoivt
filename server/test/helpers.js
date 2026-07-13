import { pool } from "../db.js";

export async function resetDb() {
  await pool.query("DELETE FROM quiz_results");
  await pool.query("DELETE FROM users");
}
