import express from 'express';
import Mongoose from 'mongoose';
import Joi from 'joi';
import { Goods, GOODS_PATTERN } from '../model/Goods';
import dayjs from 'dayjs';


export const goodsController = express.Router();

// 유저 생성 포스트
goodsController.post('/', async (req, res) => {

  const GID:Mongoose.Types.ObjectId = new Mongoose.Types.ObjectId(req.body.seller_index);
  console.log('GID',GID)
  var Goods_ = new Goods({
    "name":req.body.name,
    "price":req.body.price,
    "add_point":req.body.add_point,
    "seller_index":GID,
    "delivery_price":req.body.delivery_price,
    "discount_rate":req.body.discount_rate,
    "remaining_number":req.body.remaining_number,
    "representative_img":req.body.representative_img,
    "representative_explanation":req.body.representative_explanation,
    "goods_explanation":req.body.goods_explanation,
    "exchange_return_explanation":req.body.exchange_return_explanation,
    "origin":req.body.origin,
    "state":req.body.state,
    "sell_place":req.body.sell_place,
    "bill_availability":req.body.bill_availability,
    "etc_trading":req.body.etc_trading,
    "end_time":req.body.end_time,
    "destroy_time":req.body.destroy_time,
    "catogory_main":req.body.catogory_main,
    "catogory_sub":req.body.catogory_sub,
    "create_at":dayjs().toDate(),
    "option" : {
      "name": req.body.option.name,
      "price": req.body.option.price
    }
  });

  const checkGoodsSchema = Joi.object({
    "name" : GOODS_PATTERN.NAME,
    "catogory_main" : GOODS_PATTERN.NAME,
    "catogory_sub" : GOODS_PATTERN.NAME,
    "price" : GOODS_PATTERN.PRICE,
    "create_at" : GOODS_PATTERN.CREATE_AT,
    "_id" : GOODS_PATTERN.INDEX,
    "option" : GOODS_PATTERN.OPTION
  })

  
  try{
    await checkGoodsSchema.validateAsync(Goods_.toObject());
    await Goods_.save();
  }
  catch (error) {
    console.error(error)
    // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
    res.status(400).json();
  }
  
  // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
  res.status(201).json();


});

//모든 상품 조회
goodsController.get('/all', async (req, res) => {

  var Goods_
  
  try{
    Goods_ = await Goods.aggregate(
      [
        {
          $match: {
            name:{$regex: ""}
          }
        }
      ]
      )
    console.log(Goods)
  }
  catch (error) {
    console.error(error)
    // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
    res.status(400).json();
  }
  
  // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
  console.log(Goods_);
  res.status(201).json(Goods_);


});

// 특정 상품 업데이트
goodsController.put('/up', async (req, res) => {

  var Goods_
  
  console.log(req.body._id);
  try{
    Goods_ = await Goods.updateOne(
      {
        "name":'asdfasdf'
      }
      );

      if(Goods_==null){
        console.log("상품 컨트롤러 : 특정 상품을 찾지 못하였습니다. : ",req.body._id)
        res.status(400).json();
        return;
      }
    
  }
  catch (error) {
    console.error(error)
    // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
    res.status(400).json();
  }
  
  // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
  console.log(Goods_);
  res.status(201).json(Goods_);


});


// 특정 상품 구매
goodsController.put('/buy', async (req, res) => {

  var Goods_
  
  console.log(req.body._id);
  try{
    Goods_ = await Goods.updateOne(
      {
        "remaining_number": Goods_.remaining_number--
      }
      );

      if(Goods_==null){
        console.log("상품 컨트롤러 : 특정 상품을 찾지 못하였습니다. : ",req.body._id)
        res.status(400).json();
        return;
      }
    
  }
  catch (error) {
    console.error(error)
    // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
    res.status(400).json();
  }
  
  // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
  console.log(Goods_);
  res.status(201).json(Goods_);


});

//특정 유저 조회
goodsController.get('/one', async (req, res) => {

  var Goods_
  
  console.log(req.body._id);
  try{
    Goods_ = await Goods.findById(req.body._id);
  }
  catch (error) {
    console.error(error)
    // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
    res.status(400).json();
  }
  
  // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
  console.log(Goods_);
  res.status(201).json();


});

// 특정 상품 삭제
goodsController.delete('/del', async (req, res) => {

  var Goods_
  
  console.log(req.body._id);
  try{
    Goods_ = await Goods.deleteOne({_id:req.body._id});
  }
  catch (error) {
    console.error(error)
    // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
    res.status(400).json();
  }
  
  // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
  console.log(Goods_);
  res.status(201).json();


});