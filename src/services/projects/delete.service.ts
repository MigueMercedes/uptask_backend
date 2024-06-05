import colors from 'colors'
import { IProject } from '../../models/Project'
import Task from '../../models/Task'

export const deleteProjectService = async (project: IProject) => {
	try {
		await project.deleteOne()
		await Task.deleteMany({ project: project.id })
		return {
			status: 200,
			message: 'Project deleted successfully'
		}
	} catch (error) {
		console.log(colors.red(`deleteProjectService: ${error}`))
		return {
			status: 500,
			message: 'An error occurred while deleting the project'
		}
	}
}
