import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// GET /api/v1/timeline
export function getAllTimeline(req: Request, res: Response) {
  const db = readDB();
  res.json(db.timeline);
}

// POST /api/v1/timeline
export function createTimelineStep(req: Request, res: Response) {
  const db = readDB();
  const newStep = {
    id: `t${Date.now()}`,
    order: db.timeline.length + 1,
    ...req.body,
  };
  db.timeline.push(newStep);
  writeDB(db);
  res.status(201).json(newStep);
}

// DELETE /api/v1/timeline/:id
export function deleteTimelineStep(req: Request, res: Response) {
  const db = readDB();
  db.timeline = db.timeline.filter((t) => t.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
}
