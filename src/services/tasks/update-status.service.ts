import colors from 'colors'
import { ITask, TaskStatus } from '../../models/Task'

export const updateStatusTaskService = async (updatedStatus: TaskStatus, task: ITask) => {
	try {
		task.status = updatedStatus
		await task.save()

		return {
			status: 200,
			message: 'Status Updated Successfully'
		}
	} catch (error) {
		console.log(colors.red(`updateStatusTaskService: ${error}`))
		return {
			status: 500,
			message: 'An error occurred updating the status task'
		}
	}
}
