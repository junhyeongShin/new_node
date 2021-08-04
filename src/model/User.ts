import mongoose from 'mongoose';
import dayjs from 'dayjs';
import joi from 'joi';


const Schema = mongoose.Schema;

interface IUser extends mongoose.Document {
    index : mongoose.Types.ObjectId,
    email: string,
    name: string,
    aka_name: string, //닉네임
    profile_img: string,
    mobile: string,
    join_time: Date, // 회원 가입 일시
    out_time: Date, // 회원 탈퇴 일시
    rest_time: Date, // 휴먼 계정 날짜
    Token: string, // 회원 토큰
    facebook_url : string, // 페이스북 주소
    youtube_url  : string, // 유튜브 주소
    blog_url   : string, // 브로그 주소
    recommender: mongoose.Types.ObjectId, // 추천인
    point: number, // 마일리지
    email_agree : boolean, // 이메일 수신동의
    SMS_agree : boolean, // SMS 수신 동의
    info_open_agree : boolean, // 정보 공개 수신 동의
    address : {
        address_number : number,
        address_detail : string,
        address_name: string
    }
}

const address = new Schema({
  address_number: { type: Number },  // 우편 번호
  address_detail: { type: String },   // 상세 주소
  address_name: { type: String }  // 수취인
})

const userSchema = new Schema({
  email: joi.string().min(3).max(30).required(),
  name: { type: String, required: true },
  aka_name: { type: String, required: true }, 
  profile_img: { type: String, default: '' },
  point:{ type: Number, default: 0 },
  email_agree:{ type: Boolean, required: true, default: false }, //수신동의
  SMS_agree:{ type: Boolean, required: true, default: false }, //수신동의
  info_open_agree:{ type: Boolean, required: true, default: false }, //수신동의
  phone: { type: String, required: true, default: '' },
  join_time: { type: Date, default: dayjs().toDate() },
  rest_time: { type: Date, default: dayjs().add(1, 'years')},
  address: {
    type: address, default: {
      address_number: "",
      address_detail: "",
      address_name: ""
    }
  }
})

export const user = mongoose.model<IUser>('user', userSchema, 'user');