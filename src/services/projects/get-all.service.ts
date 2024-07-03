import colors from 'colors'
import Project from '../../models/Project'

export const getAllProjectService = async () => {
  try {
    const projects = await Project.find().sort({ createdAt: 'desc' })
    return {
      status: 200,
      data: projects,
    }
  } catch (error) {
    console.log(colors.red(`getAllProjectService: ${error}`))
    return {
      status: 500,
      message: 'An error occurred while retrieving the projects',
    }
  }
}
