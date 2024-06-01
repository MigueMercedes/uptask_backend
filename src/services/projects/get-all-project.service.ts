import colors from 'colors';
import Project from '../../models/Project';

export const getAllProjectService = async () => {
  try {
    const projects = await Project.find();
    return {
      status: 200,
      data: projects,
    };
  } catch (error) {
    console.log(colors.red(`getOneProjectService: ${error}`));
    return {
      status: 500,
      message: 'An error occurred while retrieving the projects',
    };
  }
};
