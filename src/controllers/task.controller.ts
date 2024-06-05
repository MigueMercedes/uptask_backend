import type { Request, Response } from 'express'
import { createTaskService } from '../services/tasks/create.service'
import { deleteTaskService } from '../services/tasks/delete.service'
import { getAllTaskService } from '../services/tasks/get-all.service'
import { updateStatusTaskService } from '../services/tasks/update-status.service'
import { updateTaskService } from '../services/tasks/update.service'

export const createTaskController = async (req: Request, res: Response) => {
	const { status, message } = await createTaskService(req.project, req.body)
	res.status(status).json({ message })
}

export const getAllTaskController = async (req: Request, res: Response) => {
	const { status, message, data } = await getAllTaskService(req.project)
	res.status(status).json(data ? data : { message })
}

export const getTaskByIdController = async (req: Request, res: Response) => {
	res.status(200).json(req.task)
}
export const updateTaskController = async (req: Request, res: Response) => {
	const { status, message } = await updateTaskService(req.task, req.body)
	res.status(status).json({ message })
}

export const deleteTaskController = async (req: Request, res: Response) => {
	const { status, message } = await deleteTaskService(req.task, req.project)
	res.status(status).json({ message })
}

export const updateStatusTaskController = async (req: Request, res: Response) => {
	const { status, message } = await updateStatusTaskService(req.body.status, req.task)
	res.status(status).json({ message })
}
