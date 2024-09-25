import { Router } from "express";
import userController from "../../controllers/user.controller.js";
import isValidatorUser from "../../middleware/isValidatorUser.js";


const userRoute = Router()

userRoute.use("/", userController.getAllUsers)
userRoute.use("/:id",userController.getUser)
userRoute.use("/", isValidatorUser, userController.createUser)
userRoute.use("/:id", userController.updateUser)
userRoute.use("/:id", userController.deleteUser)

export default userRoute;