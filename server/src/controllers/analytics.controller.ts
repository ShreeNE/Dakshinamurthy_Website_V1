import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// GET /api/v1/analytics
export function getAnalytics(req: Request, res: Response) {
  const db = readDB();
  res.json(db.analytics);
}

// POST /api/v1/analytics/track
export function trackPageView(req: Request, res: Response) {
  const { page } = req.body;
  const db = readDB();

  const validPages = ['home', 'storytelling', 'domains', 'flow', 'admin'];
  if (validPages.includes(page)) {
    (db.analytics.pageViews as any)[page] = ((db.analytics.pageViews as any)[page] || 0) + 1;
    db.analytics.totalInteractions = (db.analytics.totalInteractions || 0) + 1;
    writeDB(db);
    res.json({ success: true, count: (db.analytics.pageViews as any)[page] });
  } else {
    res.json({ success: false, message: "Unknown page" });
  }
}
