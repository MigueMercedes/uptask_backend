import { IProject } from '../../models/Project'
import colors from 'colors'
import Task from '../../models/Task'

export const getAllTaskService = async (project: IProject) => {
	try {
		const tasks = await Task.find({ project: project.id }).populate('project')
		return {
			status: 200,
			data: tasks
		}
	} catch (error) {
		console.log(colors.red(`getAllTaskService: ${error}`))
		return {
			status: 500,
			message: 'An error occurred while retrieving the tasks'
		}
	}
}
