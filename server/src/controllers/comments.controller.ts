import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// GET /api/v1/comments
export function getAllComments(req: Request, res: Response) {
  const db = readDB();
  res.json(db.comments);
}

// DELETE /api/v1/comments/:id
export function deleteComment(req: Request, res: Response) {
  const db = readDB();
  db.comments = db.comments.filter((c) => c.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
}
