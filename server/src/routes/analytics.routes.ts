import { Router } from 'express';
import { getAnalytics, trackPageView } from '../controllers/analytics.controller.js';

export const analyticsRouter = Router();

analyticsRouter.get('/', getAnalytics);
analyticsRouter.post('/track', trackPageView);
