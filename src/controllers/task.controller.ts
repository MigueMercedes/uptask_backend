import type { Request, Response } from 'express'
import { createTaskService } from '../services/tasks/create.service'
import { getAllTaskService } from '../services/tasks/get-all.service'
import { getOneTaskService } from '../services/tasks/get-one.service'
import { updateTaskService } from '../services/tasks/update.service'
import { deleteTaskService } from '../services/tasks/delete.service'

export const createTaskController = async (req: Request, res: Response) => {
	const { status, message } = await createTaskService(req.project, req.body)

	res.status(status).json({ message })
}

export const getAllTaskController = async (req: Request, res: Response) => {
	const { status, message, data } = await getAllTaskService(req.project)

	res.status(status).json(data ? data : { message })
}

export const getTaskByIdController = async (req: Request, res: Response) => {
	const { status, message, data } = await getOneTaskService(req.params.taskId, req.project)

	res.status(status).json(data ? data : { message })
}

export const updateTaskController = async (req: Request, res: Response) => {
	const { status, message } = await updateTaskService(req.params.taskId, req.project, req.body)

	res.status(status).json({ message })
}

export const deleteTaskController = async (req: Request, res: Response) => {
	const { status, message } = await deleteTaskService(req.params.taskId, req.project)

	res.status(status).json({ message })
}
