import "./config/env.js";
import app from "./app.js";
const PORT = process.env.SERVER_PORT;
import pool from "./config/db.js";

async function testDb() {
  const res = await pool.query("SELECT NOW()");
  console.log(`Connected to PostgreSQL. Server Time: ${res.rows[0].now}`);
}

app.listen(PORT, () => {
  testDb();
  console.log(`Server running on http://127.0.0.1:${PORT}`);

  if (process.env.NODE_ENV !== "production") {
    console.log("API DOCS: http://127.0.0.1:5000/api-docs");
  }
});
