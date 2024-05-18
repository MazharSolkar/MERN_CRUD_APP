import mongoose from 'mongoose';

const dbConnect = async () => {
	try {
		const connectObject = await mongoose.connect(``);
		console.log(`db connected`);
	} catch (err) {
		console.log('Error while connecting to db', err.message);
	}
};
