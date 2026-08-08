import { readFileSync } from "node:fs";
import pg from "pg";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL ontbreekt — draai via: npm run db:migrate (leest .env)");
  process.exit(1);
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
await client.query(readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8"));
const { rows } = await client.query(
  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY 1"
);
console.log("Tabellen in Neon:", rows.map((r) => r.table_name).join(", "));
await client.end();
