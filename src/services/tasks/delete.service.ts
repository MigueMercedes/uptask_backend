import colors from 'colors'
import { IProject } from '../../models/Project'
import { ITask } from '../../models/Task'

export const deleteTaskService = async (task: ITask, project: IProject) => {
	try {
		const taskIndex = project.tasks.findIndex((t) => t?.id === task.id)
		
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
