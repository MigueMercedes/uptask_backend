import colors from 'colors';
import Project, { IBaseProject } from '../../models/Project';

export const createProjectService = async (project: IBaseProject) => {
  try {
    const newProject = new Project(project);
    await newProject.save();
    return {
      status: 201,
      message: 'Project created successfully',
    };
  } catch (error) {
    console.log(colors.red(`createProjectService: ${error}`));
    return {
      status: 500,
      message: "Project couldn't be created",
    };
  }
};
