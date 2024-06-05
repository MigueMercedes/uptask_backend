import mongoose from 'mongoose'
import colors from 'colors'
import { exit } from 'node:process'

export const connectDB = async () => {
	try {
        const { connection } = await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017')
		const url = `${connection.host}:${connection.port}`
		console.log(colors.yellow.bold(`DB Connected Successfully: ${url}`))
	} catch (error) {
		console.log(colors.bgRed.bold((error as Error).message))
		exit(1)
	}
}
