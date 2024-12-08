import { Router } from "express";
import usersController from "../../controllers/user.controller.js";
import isValidatorUser from "../../middleware/isValidatorUser.js";


const userRouter = Router()

userRouter.post("/", isValidatorUser, usersController.create)
userRouter.post("/login", usersController.login);
userRouter.get("/:id",usersController.read)
userRouter.get("/", usersController.readAll)
userRouter.put("/:id", usersController.update)
userRouter.delete("/:id", usersController.destroy)

// router.post("/register", userController.register); ver para usar en '/'
// userRouter.get("/private-headers", passportCall('currernt'), usersController.privateData);
// userRouter.get("/private-cookies", [passportCall('current'), roleAuth('user')], usersController.privateData);
// userRouter.get("/private-cookies-admin", [passportCall('current'), roleAuth('admin')], usersController.privateData);

export default userRouter;