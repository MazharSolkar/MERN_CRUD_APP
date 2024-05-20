import { Users } from '../models/Users.model.js';
import moment from 'moment';

const userPost = async (req, res) => {
	const file = req.file.filename;
	const { fname, lname, email, mobile, gender, location, status } = req.body;

	if (
		!fname ||
		!lname ||
		!email ||
		!mobile ||
		!gender ||
		!location ||
		!status ||
		!file
	) {
		res.status(401).json({ msg: 'All Inputs are required' });
	}

	try {
		const peruser = await Users.findOne({ email: email });

		if (peruser) {
			res.status(401).json({ msg: 'User already exists' });
		}
		const dateCreated = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
		const userData = await Users.create({
			fname,
			lname,
			email,
			mobile,
			gender,
			location,
			status,
			profile: file,
			dateCreated,
		});

		res.status(200).json(userData);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export { userPost };
