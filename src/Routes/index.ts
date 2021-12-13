import express from 'express';
import { UserRouter } from './UserRouter';
export const Routes = express.Router();
Routes.use('/', UserRouter);