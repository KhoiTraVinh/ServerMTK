import { GetController } from './../Controllers/Facade/GetController';
import { UserController } from './../Controllers/UserController';

import express from 'express';
export const UserRouter = express.Router();
var GetC = new GetController();
UserRouter.get('/test', GetC.get());
UserRouter.post('/login', UserController.login);
