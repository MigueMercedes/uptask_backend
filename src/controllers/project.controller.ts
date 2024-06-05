import type { Request, Response } from 'express'
import { createProjectService } from '../services/projects/create.service'
import { deleteProjectService } from '../services/projects/delete.service'
import { getAllProjectService } from '../services/projects/get-all.service'
import { updateProjectService } from '../services/projects/update.service'

export const createProjectController = async (req: Request, res: Response) => {
	const { status, message } = await createProjectService(req.body)
	res.status(status).json({ message })
}

export const getAllProjectController = async (_req: Request, res: Response) => {
	const { status, data, message } = await getAllProjectService()
	res.status(status).json(message ? { message } : data)
}

export const getProjectByIdController = async (req: Request, res: Response) => {
	res.status(200).json(req.project)
}

export const updateProjectController = async (req: Request, res: Response) => {
	const { status, message } = await updateProjectService(req.project, req.body)
	res.status(status).json({ message })
}

export const deleteProjectController = async (req: Request, res: Response) => {
	const { status, message } = await deleteProjectService(req.project)
	res.status(status).json({ message })
}
