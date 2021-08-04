import dotenv from 'dotenv';
import express from 'express';
import winston from 'winston';
import {stream} from './winston';
import { databaseConnector } from './dbConnector'
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import dayjs from 'dayjs';
import path from 'path';
import { router } from './controller/Router'



const app = express();

if(process.env.NODE_ENV =='dev'){

  dotenv.config();
  console.log('dev')

}else{

  dotenv.config({ path: '../.product.env' });
  console.log('product')

}

databaseConnector();

app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(cors());
app.options('/', cors());
app.use(morgan('combined', { stream }));

app.use('/v1', router);


export default app;