import { Router } from "express";
import usersController from "../../controllers/user.controller.js";
import { userValidator } from "../../middleware/isValidatorUser.js";
import { roleAuth } from './../../middleware/roleUser.js';
import { passportCall } from './../../passport/passportCall.js';
import loginCheck from './../../middleware/loginCheck.js';
import { checkAuthCookies } from "../../middleware/checkCookie.js";


const userRouter = Router()

userRouter.post("/register", userValidator, usersController.create)
userRouter.post("/session", loginCheck, usersController.login);
userRouter.get("/", usersController.readAll)
userRouter.get("/current", [passportCall('current'), checkAuthCookies, roleAuth('user')], usersController.privateData);
userRouter.get("/current-admin", checkAuthCookies, [passportCall('current'), roleAuth('admin')], usersController.privateData);
userRouter.get("/filter", usersController.readByRole)
userRouter.get("/", usersController.readByemail)
userRouter.get("/:id", usersController.readID)
userRouter.put("/:id", usersController.update)
userRouter.delete("/:id", usersController.destroy)


export default userRouter;