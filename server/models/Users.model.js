import mongoose from 'mongoose';
import validator from 'validator';

const usersSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: true,
		trim: true,
	},
	lname: { type: String, required: true, trim: true },
	email: {
		type: String,
		required: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw Error('Not Valid Email !');
			}
		},
	},
	mobile: {
		type: String,
		required: true,
		unique: true,
		minlength: 10,
		maxlength: 10,
	},
	gender: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	profile: {
		type: String,
	},
	location: {
		type: String,
	},
	dateCreated: Date,
	dateUpdated: Date,
});

const Users = mongoose.model('Users', usersSchema);

export { Users };
