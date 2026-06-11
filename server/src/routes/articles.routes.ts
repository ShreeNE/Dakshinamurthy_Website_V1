import { Router } from 'express';
import { getAllArticles, createArticle, deleteArticle, likeArticle, viewArticle, addCommentToArticle } from '../controllers/articles.controller.js';

export const articlesRouter = Router();

articlesRouter.get('/', getAllArticles);
articlesRouter.post('/', createArticle);
articlesRouter.delete('/:id', deleteArticle);
articlesRouter.post('/:id/like', likeArticle);
articlesRouter.post('/:id/view', viewArticle);
articlesRouter.post('/:id/comments', addCommentToArticle);
