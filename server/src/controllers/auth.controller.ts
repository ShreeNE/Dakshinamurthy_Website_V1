import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// POST /api/v1/auth/login
export function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;
  const db = readDB();
  const user = db.users.find((u) => u.email === email && u.password === password);

  if (user) {
    const { password: _, ...safeUser } = user;
    res.json({ success: true, user: safeUser });
  } else {
    res.status(401).json({ success: false, message: "Invalid spiritual credentials." });
  }
}

// POST /api/v1/auth/google
export function googleAuthHandler(req: Request, res: Response) {
  const { email, name, picture } = req.body;
  const db = readDB();

  let user = db.users.find((u) => u.email === email);
  if (!user) {
    user = {
      id: `u${Date.now()}`,
      name: name || "Anonymous Seeker",
      email,
      role: "user",
      avatar: picture || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
    };
    db.users.push(user);
    writeDB(db);
  }

  const { password: _, ...safeUser } = user as any;
  res.json({ success: true, user: safeUser });
}
