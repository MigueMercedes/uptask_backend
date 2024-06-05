import colors from 'colors'
import { IBaseTask, ITask } from '../../models/Task'

export const updateTaskService = async (task: ITask, updatedTask: IBaseTask) => {
	try {
		task.name = updatedTask.name
		task.description = updatedTask.description

		await task.save()

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
