import { Router } from "express";
import usersController from "../../controllers/user.controller.js";
import isValidatorUser from "../../middleware/isValidatorUser.js";
import {roleAuth} from './../../middleware/roleUser.js';
import { passportCall } from './../../passport/passportCall.js';
import loginCheck from './../../middleware/loginCheck.js';


const userRouter = Router()

userRouter.post("/register", isValidatorUser, usersController.create)
userRouter.post("/session", loginCheck, usersController.login);
userRouter.get("/current", [passportCall('current'), roleAuth('user')], usersController.privateData);
userRouter.get("/current-admin", [passportCall('current'), roleAuth('admin')], usersController.privateData);
userRouter.get("/:id",usersController.read)
userRouter.get("/", usersController.readAll)
userRouter.put("/:id", usersController.update)
userRouter.delete("/:id", usersController.destroy)


export default userRouter;