import {Router} from 'express';
import {userController} from '../../controller';

const router = Router();

router.post('/', userController.createUser);

export const userRouter = router;
