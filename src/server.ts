import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { corsConfig } from './config/cors';
import { connectDB } from './config/db';
import projectRoutes from './routes/project.routes';
import taskRoutes from './routes/task.routes';

// Allows use environment variables
dotenv.config();

// Connect to DB
connectDB();

// Creates express server
const app = express();

// config CORS
app.use(cors(corsConfig));

// Allows read JSONs
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/projects', taskRoutes);

export default app;
