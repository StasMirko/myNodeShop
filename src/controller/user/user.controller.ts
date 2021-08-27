import {NextFunction, Request, Response} from 'express';
import {userService} from '../../services';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction){
    const user = req.body;

    await userService.createUser(user);

    res.sendStatus(201);
  }
}

export const userController = new UserController();
