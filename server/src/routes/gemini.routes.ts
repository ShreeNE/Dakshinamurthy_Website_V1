import { Router } from 'express';
import { spiritualGuideHandler } from '../controllers/gemini.controller.js';

export const geminiRouter = Router();

geminiRouter.post('/spiritual-guide', spiritualGuideHandler);
