import express from 'express';
import { userController } from './UserController';


export const router = express.Router();

router.use('/user', userController);
