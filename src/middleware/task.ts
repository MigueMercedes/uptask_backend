import type { NextFunction, Request, Response } from 'express'
import Task, { ITask } from '../models/Task'
import colors from 'colors'

declare global {
	namespace Express {
		interface Request {
			task: ITask
		}
	}
}

export const taskExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const task = await Task.findById(req.params.taskId)

		if (!task || task.project.toString() !== req.project.id)
			return res.status(404).json({ message: 'Project Not Found' })

		req.task = task

		next()
	} catch (error) {
		console.log(colors.red(`projectExistsMiddleware: ${error}`))
		res.status(500).json({ message: 'An error ocurred while retrieving the project' })
	}
}
