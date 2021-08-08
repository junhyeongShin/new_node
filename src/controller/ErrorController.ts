import express from 'express';
import Joi from 'joi';
import { user, USER_PATTERN } from '../model/User';
import dayjs from 'dayjs';

export const errorController = express.Router();


errorController.all('/', async (req, res) => {

  res.status(403).json();


});