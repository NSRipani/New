import { Router } from "express";
import userController from "../../controllers/user.controller.js";
import isValidatorUser from "../../middleware/isValidatorUser.js";


const userRoute = Router()

userRoute.get("/", userController.getAllUsers)
userRoute.get("/:id",userController.getUser)
userRoute.post("/", isValidatorUser, userController.createUser)
userRoute.put("/:id", userController.updateUser)
userRoute.delete("/:id", userController.deleteUser)

export default userRoute;