import type { Request, Response } from 'express'
import { createProjectService } from '../services/projects/create.service'
import { deleteProjectService } from '../services/projects/delete.service'
import { getAllProjectService } from '../services/projects/get-all.service'
import { getOneProjectService } from '../services/projects/get-one.service'
import { updateProjectService } from '../services/projects/update.service'

export const createProjectController = async (req: Request, res: Response) => {
	const { status, message } = await createProjectService(req.body)
	res.status(status).json({ message })
}

export const getAllProjectController = async (req: Request, res: Response) => {
	const { status, data, message } = await getAllProjectService()

	res.status(status).json(message ? { message } : data)
}

export const getProjectByIdController = async (req: Request, res: Response) => {
	const { status, message, data } = await getOneProjectService(req.params.id)

	res.status(status).json(message ? { message } : data)
}

export const updateProjectController = async (req: Request, res: Response) => {
	const { status, message } = await updateProjectService(req.params.id, req.body)

	res.status(status).json({ message })
}

export const deleteProjectController = async (req: Request, res: Response) => {
	const { status, message } = await deleteProjectService(req.params.id)

	res.status(status).json({ message })
}
