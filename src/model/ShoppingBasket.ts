import mongoose from 'mongoose';
import moment from 'moment';
import Joi from 'joi';


const Schema = mongoose.Schema;

interface IShoppingBasket extends mongoose.Document {

    user_id: mongoose.Types.ObjectId, // 유저 인덱스
    goods_id: mongoose.Types.ObjectId, // 상품 인덱스
    create_at: Date, // 장바구니에 담긴 일시
    goods_count: number, // 상품 갯수
    is_delivery: boolean, // 배송 여부
    address : { //배송지
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

const shoppingBasketSchema = new Schema({
  user_id: { type: Object, required: true },
  goods_id: { type: Object, required: true },
  goods_count:{ type: Number, default: 1 },
  is_delivery:{ type: Boolean, required: true, default: false },
  create_at: { type: Date, default: moment().toDate() },
  address: {
    type: address, default: {
      address_number: "",
      address_detail: "",
      address_name: ""
    }
  }
})

export const BASKET_PATTERN = {
  USER_ID: Joi.object().required(),
  GOODS_ID: Joi.object().required(),
  GOODS_COUNT: Joi.number().min(1).max(9999999).required(),
  IS_DELIVERY: Joi.boolean().required(),
  CREATE_AT: Joi.date()
}

export const shoppingBasket = mongoose.model<IShoppingBasket>('shopping_basket', shoppingBasketSchema, 'shopping_basket');