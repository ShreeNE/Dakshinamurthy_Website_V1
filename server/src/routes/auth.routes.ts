import { Router } from 'express';
import { loginHandler, googleAuthHandler } from '../controllers/auth.controller.js';

export const authRouter = Router();

authRouter.post('/login', loginHandler);
authRouter.post('/google', googleAuthHandler);
