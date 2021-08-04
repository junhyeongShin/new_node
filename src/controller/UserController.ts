import express from 'express';
import joi from 'joi';
import { user } from '../model/User';
import moment from 'moment';
import { logger } from 'src/winston';




export const userController = express.Router();

// 접속 테스용
userController.get('/test', async (req, res) => {
  res.status(200).json()
})

// 회원 가입시 중복 확인
userController.get('/doubleCheck', async (req, res) => {
  // const user = await User.findOne(req.session.user_id);
  // if (!user) {
  //     res.status(404).end();
  // }
  // return res.json(user).end();
})


userController.post('/signUp', (req, res) => {

  var user_ = new user
  user_ = req.body;
  
  console.log(req.body);

  res.status(200).json()
  // user.save({ name: req.body.name }, (err, result) => {
  //   if (err) {
  //     return logger.error(err);
  //   }
  //   res.json(result);
  // });

});