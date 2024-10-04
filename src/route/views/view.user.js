import { Router } from "express";
import userController from './../../controllers/user.controller.js';
// import isValidatorUser from './../../middleware/isValidatorUser.js';

const userView = Router()

userView.get("/", userController.AllUsers)
userView.get("/:id", userController.userProfile)
userView.get("/register", userController.userRegiter)
userView.get("/login", userController.login)
// userView.get("/login", userController.controllerLogin)
export default userView