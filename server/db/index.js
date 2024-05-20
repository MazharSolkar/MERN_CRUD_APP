import mongoose from 'mongoose';

const dbConnect = async () => {
	try {
		const connectObject = await mongoose.connect(
			`${process.env.MONGO_URI}/crud_db`
		);
		console.log(`db connected on ${mongoose.connection.host}`);
	} catch (err) {
		console.log('Error while connecting to db', err.message);
	}
};

export default dbConnect;
