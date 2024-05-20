import express from 'express';
import dbConnect from './db/index.js';
import 'dotenv/config';
import { Users } from './models/Users.model.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', async (req, res) => {
	return res.status(201).json({ msg: 'servers started' });
});

dbConnect()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server listning on http://localhost:${port}`);
		});
	})
	.catch((err) => console.log('Error while connecting to DB', err.message));
