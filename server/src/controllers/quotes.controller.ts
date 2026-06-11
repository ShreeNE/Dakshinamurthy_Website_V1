import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// GET /api/v1/quotes
export function getAllQuotes(req: Request, res: Response) {
  const db = readDB();
  res.json(db.quotes);
}

// POST /api/v1/quotes
export function createQuote(req: Request, res: Response) {
  const db = readDB();
  const newQuote = {
    id: `q${Date.now()}`,
    text: req.body.text,
    author: req.body.author || "Unknown Mystic",
    category: req.body.category || "Wisdom",
  };
  db.quotes.push(newQuote);
  writeDB(db);
  res.status(201).json(newQuote);
}

// DELETE /api/v1/quotes/:id
export function deleteQuote(req: Request, res: Response) {
  const db = readDB();
  db.quotes = db.quotes.filter((q) => q.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
}
