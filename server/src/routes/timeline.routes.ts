import { Router } from 'express';
import { getAllTimeline, createTimelineStep, deleteTimelineStep } from '../controllers/timeline.controller.js';

export const timelineRouter = Router();

timelineRouter.get('/', getAllTimeline);
timelineRouter.post('/', createTimelineStep);
timelineRouter.delete('/:id', deleteTimelineStep);
