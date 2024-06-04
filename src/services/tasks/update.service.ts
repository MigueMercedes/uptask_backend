import { IProject } from '../../models/Project'
import Task, { IBaseTask } from '../../models/Task'
import colors from 'colors'

export const updateTaskService = async (taskId: string, project: IProject, updatedTask: IBaseTask) => {
	try {
		const task = await Task.findByIdAndUpdate(taskId, updatedTask)

		if (!task || task.project.toString() !== project.id) {
			return {
				status: 404,
				message: 'Task Not Found'
			}
		}

		return {
			status: 200,
			message: 'Task Updated Successfully'
		}
	} catch (error) {
		console.log(colors.red(`updateTaskService: ${error}`))
		return {
			status: 500,
			message: 'An error occurred updating the task'
		}
	}
}
