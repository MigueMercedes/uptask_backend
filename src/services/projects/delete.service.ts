import colors from 'colors';
import Project from '../../models/Project';

export const deleteProjectService = async (projectId: string) => {
  try {
    const project = await Project.findByIdAndDelete(projectId);

    if (!project) {
      return {
        status: 404,
        message: 'Project Not Found',
      };
    }

    return {
      status: 200,
      message: 'Project deleted successfully',
    };
  } catch (error) {
    console.log(colors.red(`deleteProjectService: ${error}`));
    return {
      status: 500,
      message: 'An error occurred while deleting the project',
    };
  }
};
