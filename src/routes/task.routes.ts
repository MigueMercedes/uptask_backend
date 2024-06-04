import { Router } from 'express'
import { createTaskController, deleteTaskController, getAllTaskController, getTaskByIdController, updateTaskController } from '../controllers/task.controller'
import { body, param } from 'express-validator'
import { handleInputErrors } from '../middleware/validation'
import { validateProjectExists } from '../middleware/project'

const router = Router()

router.param('projectId', validateProjectExists)

router.post(
	'/:projectId/tasks',
	param('projectId').notEmpty().withMessage('Invalid ID'),
	body('name').notEmpty().withMessage('The Task Name is required'),
	body('description').notEmpty().withMessage('The Task Description is required'),
	handleInputErrors,
	createTaskController
)

router.get(
	'/:projectId/tasks',
	getAllTaskController
)

router.get(
	'/:projectId/tasks/:taskId',
	param('projectId').notEmpty().withMessage('Invalid ID'),
	param('taskId').notEmpty().withMessage('Invalid ID'),
    handleInputErrors,
	getTaskByIdController
)

router.put(
	'/:projectId/tasks/:taskId',
	param('projectId').notEmpty().withMessage('Invalid ID'),
	param('taskId').notEmpty().withMessage('Invalid ID'),
	body('name').notEmpty().withMessage('The Task Name is required'),
	body('description').notEmpty().withMessage('The Task Description is required'),
	handleInputErrors,
	updateTaskController
)

router.delete(
    '/:projectId/tasks/:taskId',
	param('projectId').notEmpty().withMessage('Invalid ID'),
	param('taskId').notEmpty().withMessage('Invalid ID'),
    handleInputErrors,
    deleteTaskController
)

export default router
