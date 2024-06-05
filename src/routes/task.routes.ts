import { Router } from 'express';
import { body, param } from 'express-validator';
import { projectExistsMiddleware } from '../middleware/project';
import { taskExistsMiddleware } from '../middleware/task';
import { handleInputErrors } from '../middleware/validation';
import { 
	createTaskController, 
	deleteTaskController, 
	getAllTaskController, 
	getTaskByIdController, 
	updateStatusTaskController, 
	updateTaskController 
} from '../controllers/task.controller';

const router = Router()

router.param('projectId', projectExistsMiddleware)

router.post(
	'/:projectId/tasks',
	param('projectId').isMongoId().withMessage('Invalid ID'),
	body('name').notEmpty().withMessage('The Task Name is required'),
	body('description').notEmpty().withMessage('The Task Description is required'),
	handleInputErrors,
	createTaskController
)

router.get(
	'/:projectId/tasks',
	getAllTaskController
)

router.param('taskId', taskExistsMiddleware)

router.get(
	'/:projectId/tasks/:taskId',
	param('projectId').isMongoId().withMessage('Invalid ID'),
	param('taskId').isMongoId().withMessage('Invalid ID'),
    handleInputErrors,
	getTaskByIdController
)

router.put(
	'/:projectId/tasks/:taskId',
	param('projectId').isMongoId().withMessage('Invalid ID'),
	param('taskId').isMongoId().withMessage('Invalid ID'),
	body('name').notEmpty().withMessage('The Task Name is required'),
	body('description').notEmpty().withMessage('The Task Description is required'),
	handleInputErrors,
	updateTaskController
)

router.delete(
    '/:projectId/tasks/:taskId',
	param('projectId').isMongoId().withMessage('Invalid ID'),
	param('taskId').isMongoId().withMessage('Invalid ID'),
    handleInputErrors,
    deleteTaskController
)

router.post(
    '/:projectId/tasks/:taskId/status',
	param('projectId').isMongoId().withMessage('Invalid ID'),
	param('taskId').isMongoId().withMessage('Invalid ID'),
	body('status').notEmpty().withMessage('The State is required'),
	handleInputErrors,
	updateStatusTaskController
)

export default router
