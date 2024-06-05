import { Router } from 'express';
import { body, param } from 'express-validator';
import {
  createProjectController,
  deleteProjectController,
  getAllProjectController,
  getProjectByIdController,
  updateProjectController,
} from '../controllers/project.controller';
import { handleInputErrors } from '../middleware/validation';
import { projectExistsMiddleware } from '../middleware/project';

const router = Router();


router.post(
  '/',
  body('projectName')
  .notEmpty()
  .withMessage('The project name must be required'),
  body('clientName').notEmpty().withMessage('The client name must be required'),
  body('description')
  .notEmpty()
  .withMessage('The description must be required'),
  handleInputErrors,
  createProjectController
);

router.get('/', getAllProjectController);

router.param('id', projectExistsMiddleware)

router.get(
  '/:id',
  param('id').isMongoId().withMessage('Invalid ID'),
  handleInputErrors,
  getProjectByIdController
);

router.put(
  '/:id',
  param('id').isMongoId().withMessage('Invalid ID'),
  body('projectName')
    .notEmpty()
    .withMessage('The project name must be required'),
  body('clientName').notEmpty().withMessage('The client name must be required'),
  body('description')
    .notEmpty()
    .withMessage('The description must be required'),
  handleInputErrors,
  updateProjectController
);

router.delete(
  '/:id',
  param('id').isMongoId().withMessage('Invalid ID'),
  handleInputErrors,
  deleteProjectController
);

export default router;
