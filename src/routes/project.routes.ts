import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import { handleInputErrors } from '../middleware/validation'

const router = Router()

router.post(
	'/',
	body('projectName').notEmpty().withMessage('The project name must be required'),
	body('clientName').notEmpty().withMessage('The client name must be required'),
	body('description').notEmpty().withMessage('The description must be required'),
	handleInputErrors,
	ProjectController.createProject
)

router.get('/', ProjectController.getAllProject)

router.get(
    '/:id', 
    param('id').isMongoId().withMessage('Invalid ID'), 
    handleInputErrors, 
    ProjectController.getProjectById
)

router.put(
    '/:id', 
    param('id').isMongoId().withMessage('Invalid ID'), 
    body('projectName').notEmpty().withMessage('The project name must be required'),
	body('clientName').notEmpty().withMessage('The client name must be required'),
	body('description').notEmpty().withMessage('The description must be required'),
	handleInputErrors, 
    ProjectController.updateProject
)

router.delete('/:id', 
    param('id').isMongoId().withMessage('Invalid ID'),
    handleInputErrors,
    ProjectController.deleteProject
)
export default router
