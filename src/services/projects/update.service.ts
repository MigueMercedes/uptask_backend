import colors from 'colors';
import Project, { IBaseProject } from '../../models/Project';

export const updateProjectService = async (
  projectId: string,
  project: IBaseProject
) => {
  try {
    const newProject = await Project.findByIdAndUpdate(projectId, project);

    if (!newProject) {
      return {
        status: 404,
        message: 'Project Not found',
      };
    }

    await newProject.save();

    return {
      status: 200,
      message: 'Project updated successfully',
    };
  } catch (error) {
    console.log(colors.red(`updateProjectService: ${error}`));
    return {
      status: 500,
      message: 'An error occurred while updating the project',
    };
  }
};
