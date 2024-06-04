import colors from 'colors'
import { IProject } from '../../models/Project'
import Task from '../../models/Task'

export const getOneTaskService = async (taskId: string, project: IProject) => {
	try {
		const task = await Task.findById(taskId)

		if (!task || task.project.toString() !== project.id) {
			return {
				status: 404,
				message: 'Task Not Found'
			}
		}

		return {
			status: 200,
			data: task
		}
	} catch (error) {
		console.log(colors.red(`getOneTaskService: ${error}`))
		return {
			status: 500,
			message: 'An error occurred while retrieving the task'
		}
	}
}
