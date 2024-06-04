import mongoose, { Document, Schema, Types } from 'mongoose'

const taskStatus = {
	PENDING: 'pending',
	ON_HOLD: 'onHold',
	IN_PROGRESS: 'inProgress',
	UNDER_REVIEW: 'underReview',
	COMPLETED: 'completed'
} as const

export type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus]

export interface IBaseTask {
	name: string
	description: string
}

export interface ITask extends IBaseTask, Document {
	project: Types.ObjectId
}

export const TaskSchema: Schema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true
		},
		description: {
			type: String,
			trim: true,
			required: true
		},
		project: {
			type: Types.ObjectId,
			ref: 'Project'
		},
		status: {
			type: String,
			enum: Object.values(taskStatus),
			default: taskStatus.PENDING
		}
	},
	{ timestamps: true }
)

const Task = mongoose.model<ITask>('Task', TaskSchema)
export default Task
