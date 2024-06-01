import type { Request, Response } from 'express';
import Project from '../models/Project';
import { getOneProjectService } from '../services/projects/get-one-project.service';

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const { projectId } = req.params
    
    try {
      const project = getOneProjectService(projectId)

      console.log(project);
    } catch (error) {
      console.log(error);
    }
  };
}
