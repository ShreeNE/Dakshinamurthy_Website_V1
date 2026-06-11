import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// GET /api/v1/domains
export function getAllDomains(req: Request, res: Response) {
  const db = readDB();
  res.json(db.domains);
}

// POST /api/v1/domains
export function createDomain(req: Request, res: Response) {
  const db = readDB();
  const newDomain = {
    id: `d${Date.now()}`,
    ...req.body,
    relatedSlugs: req.body.relatedSlugs || [],
    practiceSteps: req.body.practiceSteps || [],
  };
  db.domains.push(newDomain);
  writeDB(db);
  res.status(201).json(newDomain);
}

// DELETE /api/v1/domains/:id
export function deleteDomain(req: Request, res: Response) {
  const db = readDB();
  db.domains = db.domains.filter((d) => d.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
}
