import { Router } from 'express';
import { getAllComments, deleteComment } from '../controllers/comments.controller.js';

export const commentsRouter = Router();

commentsRouter.get('/', getAllComments);
commentsRouter.delete('/:id', deleteComment);
