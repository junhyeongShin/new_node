// import express from 'express';


// export const shoppingBasketController = express.Router();

// // 유저 생성 포스트
// shoppingBasketController.post('/', async (req, res) => {

//   var address_number = req.body.address.address_number;
//   var address_detail = req.body.address.address_detail;
//   var address_name = req.body.address.address_name;

  
//   var user_ = new user({
//     "name":req.body.name,
//     "aka_name":req.body.aka_name,
//     "phone":req.body.phone,
//     "email":req.body.email,
//     "join_time":dayjs().toDate(),
//     "address" : {
//       "address_number": address_number,
//       "address_detail": address_detail,
//       "address_name": address_name
//     }
//   });

//   const checkUserSchema = Joi.object({
//     "name" : USER_PATTERN.NAME,
//     "aka_name" : USER_PATTERN.AKA_NAME,
//     "phone" : USER_PATTERN.PHONE,
//     "email" : USER_PATTERN.EMAIL,
//     "join_time" : USER_PATTERN.JOIN_TIME,
//     "_id" : USER_PATTERN.INDEX,
//     "address" : USER_PATTERN.ADDRESS
//   })

  
//   try{
//     await checkUserSchema.validateAsync(user_.toObject());
    
//     await user_.save();
//   }
//   catch (error) {
//     console.error(error)
//     // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
//     res.status(400).json();
//   }
  
//   // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
//   res.status(201).json();


// });

// //모든 유저 조회
// shoppingBasketController.get('/all', async (req, res) => {

//   var user_
  
//   try{
//     user_ = await user.aggregate(
//       [
//         {
//           $match: {
//             name:{$regex: ""}
//           }
//         }
//       ]
//       )
//     console.log(user)
//   }
//   catch (error) {
//     console.error(error)
//     // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
//     res.status(400).json();
//   }
  
//   // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
//   console.log(user_);
//   res.status(201).json(user_);


// });

// // 특정 유저 업데이트
// shoppingBasketController.put('/up', async (req, res) => {

//   var user_
  
//   console.log(req.body._id);
//   try{
//     user_ = await user.updateOne(
//       {
//         "phone":'00000000000'
//       }
//       );

//       if(user_==null){
//         console.log("유저 컨트롤러 : 특정 회원을 찾지 못하였습니다. : ",req.body._id)
//         res.status(400).json();
//         return;
//       }
    
//   }
//   catch (error) {
//     console.error(error)
//     // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
//     res.status(400).json();
//   }
  
//   // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
//   console.log(user_);
//   res.status(201).json(user_);


// });

// //특정 유저 조회
// shoppingBasketController.get('/one', async (req, res) => {

//   var user_
  
//   console.log(req.body._id);
//   try{
//     user_ = await user.findById(req.body._id);

//   }
//   catch (error) {
//     console.error(error)
//     // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
//     res.status(400).json();
//   }
  
//   // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
//   console.log(user_);
//   res.status(201).json();


// });

// // 특정 유저 삭제
// shoppingBasketController.delete('/del', async (req, res) => {

//   var user_
  
//   console.log(req.body._id);
//   try{
//     user_ = await user.deleteOne({_id:req.body._id});
//   }
//   catch (error) {
//     console.error(error)
//     // 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
//     res.status(400).json();
//   }
  
//   // 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
//   console.log(user_);
//   res.status(201).json();


// });