import mongoose from 'mongoose';
import dayjs from 'dayjs';
import Joi from 'joi';

const Schema = mongoose.Schema;

interface IUser extends mongoose.Document {
    _id : mongoose.ObjectId,
    email: string,
    name: string,
    aka_name: string, //닉네임
    phone: string,
    join_time: Date, // 회원 가입 일시
    rest_time: Date, // 휴먼 계정 날짜
    address : {
        address_number : string,
        address_detail : string,
        address_name: string
    }
}

export const addressSchema = new Schema({
  address_number: { type: String, required: true },  // 우편 번호
  address_detail: { type: String, required: true },  // 상세 주소
  address_name: { type: String, required: true }  // 수취인
})

export const ADDRESS_PATTERN = {
  NUMBER: Joi.string().min(4).max(30).required(),
  NAME: Joi.string().min(4).max(30).required(),
  DETAIL: Joi.string().min(2).max(30).required(),
  INDEX : Joi.object().required()
}

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  aka_name: { type: String, required: true }, 
  phone: { type: String, required: true, default: '' },
  join_time: { type: Date, default: dayjs().toDate() },
  address:{
    address_number:{ type: String, required: true },
    address_detail:{ type: String, required: true },
    address_name:{ type: String, required: true }
  }
})

export const USER_PATTERN = {
    PHONE: Joi.string().min(8).max(15).required(),
    NAME: Joi.string().min(6).max(30).required(),
    EMAIL: Joi.string().email().required(),
    AKA_NAME: Joi.string().required(),
    JOIN_TIME: Joi.date(),
    INDEX : Joi.object().required(),
    ADDRESS : Joi.object()
}
 

export const user = mongoose.model<IUser>('user', userSchema, 'user');
