import { Router } from 'express';
import { userController } from '../controllers/usersController.js';

const router = Router();
console.log(userController);
// routes
router.route('/user/register').post(userController.userPost);

export { router };
