import { Request, Response } from 'express';
import { readDB, writeDB } from '../config/database.js';

// GET /api/v1/articles
export function getAllArticles(req: Request, res: Response) {
  const db = readDB();
  res.json(db.articles);
}

// POST /api/v1/articles
export function createArticle(req: Request, res: Response) {
  const db = readDB();
  const newArticle = {
    id: `a${Date.now()}`,
    ...req.body,
    date: new Date().toISOString().split("T")[0],
    likes: 0,
    views: 0,
  };
  db.articles.push(newArticle);
  writeDB(db);
  res.status(201).json(newArticle);
}

// DELETE /api/v1/articles/:id
export function deleteArticle(req: Request, res: Response) {
  const db = readDB();
  db.articles = db.articles.filter((a) => a.id !== req.params.id);
  writeDB(db);
  res.json({ success: true });
}

// POST /api/v1/articles/:id/like
export function likeArticle(req: Request, res: Response) {
  const db = readDB();
  const article = db.articles.find((a) => a.id === req.params.id);
  if (article) {
    article.likes = (article.likes || 0) + 1;
    writeDB(db);
    res.json({ success: true, likes: article.likes });
  } else {
    res.status(404).json({ success: false, message: "Article not found" });
  }
}

// POST /api/v1/articles/:id/view
export function viewArticle(req: Request, res: Response) {
  const db = readDB();
  const article = db.articles.find((a) => a.id === req.params.id);
  if (article) {
    article.views = (article.views || 0) + 1;
    writeDB(db);
    res.json({ success: true, views: article.views });
  } else {
    res.status(404).json({ success: false, message: "Article not found" });
  }
}

// POST /api/v1/articles/:id/comments
export function addCommentToArticle(req: Request, res: Response) {
  const db = readDB();
  const { authorName, authorEmail, content } = req.body;
  const newComment = {
    id: `c${Date.now()}`,
    articleId: req.params.id,
    authorName: authorName || "Anonymous Seeker",
    authorEmail: authorEmail || "seeker@cosmos.org",
    content,
    createdAt: new Date().toISOString(),
  };
  db.comments.push(newComment);
  writeDB(db);
  res.status(201).json(newComment);
}
