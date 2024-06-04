import colors from 'colors'
import { IProject } from '../../models/Project'
import Task, { IBaseTask } from '../../models/Task'

export const createTaskService = async (project: IProject, createdTask: IBaseTask) => {
	try {
		const task = new Task(createdTask)
		task.project = project.id

		// Add task in the project
		project.tasks.push(task.id)
		await Promise.allSettled([task.save(), project.save()])
 
		return {
			status: 201,
			message: 'Task created successfully'
		}
	} catch (error) {
		console.log(colors.red(`createTaskService: ${error}`))
		return {
			status: 500,
			message: "Task couldn't be created"
		}
	}
}
