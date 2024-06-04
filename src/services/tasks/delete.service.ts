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

        project.tasks = project.tasks.filter( t => t.toString() !== task.id)

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
