import express from 'express';
import { corsMiddleware } from './middleware/cors.middleware.js';
import { errorMiddleware } from './middleware/error.middleware.js';
import { apiRouter } from './routes/index.js';

const app = express();

// Middleware chain
app.use(corsMiddleware);
app.use(express.json());

// Mount all API routes under /api/v1
app.use('/api/v1', apiRouter);

// Global error handler
app.use(errorMiddleware);

export default app;
