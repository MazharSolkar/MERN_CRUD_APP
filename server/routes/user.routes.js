import { Router } from 'express';
import { userPost } from '../controllers/usersController.js';
import { upload } from '../multerConfig/storageConfig.js';

const router = Router();

// routes
router.route('/user/register').post(upload.single('user_profile'), userPost);

export { router as userRouter };
