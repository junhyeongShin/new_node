import express from 'express';
import { userController } from './UserController';
import { testController } from './TestController';


export const router = express.Router();

router.use('/user', userController);
router.use('/test', testController);

