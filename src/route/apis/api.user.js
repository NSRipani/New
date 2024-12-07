import { Router } from "express";
import usersController from "../../controllers/user.controller.js";
import isValidatorUser from "../../middleware/isValidatorUser.js";


const userRouter = Router()

userRouter.post("/", isValidatorUser, usersController.create)
userRouter.get("/:id",usersController.read)
userRouter.get("/", usersController.readAll)
userRouter.put("/:id", usersController.update)
userRouter.delete("/:id", usersController.destroy)

// router.post("/register", userController.register); ver para usar en '/'
// router.post("/login", userController.login);
// router.get("/private-headers", passportCall('jwt'), userController.privateData);
// router.get("/private-cookies", [passportCall('jwtCookies'), roleAuth('user')], userController.privateData);
// router.get("/private-cookies-admin", [passportCall('jwtCookies'), roleAuth('admin')], userController.privateData);

export default userRouter;