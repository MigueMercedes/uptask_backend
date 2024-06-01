import colors from 'colors';
import Project from '../../models/Project';

export const getOneProjectService = async (projectId: string) => {
  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return {
        status: 404,
        message: 'project Not Found',
      };
    }

    return {
      status: 200,
      data: project,
    };
  } catch (error) {
    console.log(colors.red(`getOneProjectService: ${error}`));
    return {
      status: 500,
      message: `An error occurred while retrieving the project`,
    };
  }
};
