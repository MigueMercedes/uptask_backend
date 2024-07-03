import colors from 'colors'
import { IBaseProject, IProject } from '../../models/Project'

export const updateProjectService = async (project: IProject, updatedProject: IBaseProject) => {
  try {
    const { clientName, description, projectName } = updatedProject

    project.clientName = clientName
    project.projectName = projectName
    project.description = description

    await project.save()
    return {
      status: 200,
      message: 'Project updated successfully',
    }
  } catch (error) {
    console.log(colors.red(`updateProjectService: ${error}`))
    return {
      status: 500,
      message: 'An error occurred while updating the project',
    }
  }
}
