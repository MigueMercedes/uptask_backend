import type { Request, Response, NextFunction } from 'express'
import { getOneProjectService } from '../services/projects/get-one.service'
import { IProject } from '../models/Project'

declare global {
	namespace Express {
		interface Request {
			project: IProject
		}
	}
}

export const validateProjectExists = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { status, data, message } = await getOneProjectService(req.params.projectId || req.params.id)

		if (!data) return res.status(status).json({ message })

		req.project = data

		next()
	} catch (error) {
		res.status(500).json({ error: 'An error ocurred' })
	}
}
