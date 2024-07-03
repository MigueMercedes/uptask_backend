import mongoose, { Schema, Document, PopulatedDoc, Types } from 'mongoose';
import { ITask } from './Task';

export interface IBaseProject {
  projectName: string;
  clientName: string;
  description: string;
}

export interface IProject extends Document, IBaseProject {
  tasks: PopulatedDoc<ITask & Document>[];
}

const ProjectSchema: Schema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    tasks: [
      {
        type: Types.ObjectId,
        ref: 'Task',
      },
    ],
  },
  { timestamps: true }
);

const Project = mongoose.model<IProject>('Project', ProjectSchema);
export default Project;
