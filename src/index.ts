import * as dotenv from 'dotenv';
dotenv.config();
import { Routes } from './Routes/index';
import express from 'express';
import bodyParser from 'body-parser';
const api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use('/api', Routes);

api.listen(process.env.PORT, () => {
    console.log(`Server run on ${process.env.PORT}`);
})
