import type { Request, Response } from 'express';
import Project from '../models/Project';
import { createProjectService } from '../services/projects/create-project.service';
import { getAllProjectService } from '../services/projects/get-all-project.service';
import { getOneProjectService } from '../services/projects/get-one-project.service';
import { updateProjectService } from '../services/projects/update-project.service';
import { deleteProjectService } from '../services/projects/delete-project.service';

export const createProjectController = async (req: Request, res: Response) => {
  const { status, message } = await createProjectService(req.body);
  res.status(status).json({ message });
};

export const getAllProjectController = async (req: Request, res: Response) => {
  const { status, data, message } = await getAllProjectService();

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

export const getProjectByIdController = async (req: Request, res: Response) => {
  const { status, message, data } = await getOneProjectService(req.params.id);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

export const updateProjectController = async (req: Request, res: Response) => {
  const { status, message } = await updateProjectService(
    req.params.id,
    req.body
  );

  res.status(status).json(message);
};

export const deleteProjectController = async (req: Request, res: Response) => {
  const { status, message } = await deleteProjectService(req.params.id);

  res.status(status).json(message);
};
