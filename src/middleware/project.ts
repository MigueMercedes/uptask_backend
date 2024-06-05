import type { NextFunction, Request, Response } from 'express'
import Project, { IProject } from '../models/Project'
import colors from 'colors'

declare global {
	namespace Express {
		interface Request {
			project: IProject
		}
	}
}

export const projectExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const project = await Project.findById(req.params.projectId || req.params.id).populate('tasks')

		if (!project) return res.status(404).json({ message: 'Project Not Found' })

		req.project = project

		next()
	} catch (error) {
		console.log(colors.red(`projectExistsMiddleware: ${error}`))
		res.status(500).json({ message: 'An error ocurred while retrieving the project' })
	}
}
