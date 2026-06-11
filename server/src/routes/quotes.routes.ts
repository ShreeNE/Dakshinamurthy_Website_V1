import { Router } from 'express';
import { getAllQuotes, createQuote, deleteQuote } from '../controllers/quotes.controller.js';

export const quotesRouter = Router();

quotesRouter.get('/', getAllQuotes);
quotesRouter.post('/', createQuote);
quotesRouter.delete('/:id', deleteQuote);
