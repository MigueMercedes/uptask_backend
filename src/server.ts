import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import projectRoutes from './routes/project.routes'

// Allows use environment variables
dotenv.config()

connectDB()

// Creates express server
const app = express()

// Allows read JSONs
app.use(express.json())

// Routes
app.use('/api/projects', projectRoutes)

export default app;