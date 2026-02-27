import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "comments.db");

export const db = new Database(dbPath);

db.exec(`
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT,
  name TEXT,
  text TEXT,
  createdAt TEXT,
  likes INTEGER DEFAULT 0
)
`);