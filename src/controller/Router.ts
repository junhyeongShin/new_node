import express from 'express';
import { userController } from './UserController';
import { goodsController } from './GoodsController';
// import { shoppingBasketController } from './ShoppingBasketController';
import { errorController } from './ErrorController';


export const router = express.Router();

router.use('/user', userController);
router.use('/goods', goodsController);
// router.use('/basket', shoppingBasketController);
router.use('/', errorController);
