import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import projectRoutes from './routes/project.routes'
import taskRoutes from './routes/task.routes'
// Allows use environment variables
dotenv.config()

connectDB()

// Creates express server
const app = express()

// Allows read JSONs
app.use(express.json())

// Routes
app.use('/api/projects', projectRoutes)
app.use('/api/projects', taskRoutes)

export default app;