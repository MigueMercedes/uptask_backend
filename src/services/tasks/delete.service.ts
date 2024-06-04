import colors from 'colors'
import { IProject } from '../../models/Project'
import { getOneTaskService } from './get-one.service'
export const deleteTaskService = async (taskId: string, project: IProject) => {
	try {
		const { status, data: task, message } = await getOneTaskService(taskId, project)

		if (!task) {
			return {
				status,
				message
			}
		}

		const taskIndex = project.tasks.findIndex((t) => t.id === task.id)
		console.log('taskIndex', taskIndex)
		project.tasks.splice(taskIndex, 1)

		await Promise.allSettled([task.deleteOne(), project.save()])

		return {
			status: 200,
			message: 'Task Deleted Successfully'
		}
	} catch (error) {
		console.log(colors.red(`updateTaskService: ${error}`))
		return {
			status: 500,
			message: 'An error occurred updating the task'
		}
	}
}
