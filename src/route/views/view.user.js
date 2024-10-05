import { Router } from 'express';
import userController from './../../controllers/user.controller.js';


const userView = Router()

userView.get("/", userController.AllUsers)
userView.get("/:id", userController.userProfile)
userView.get("/register", userController.userRegiter)
userView.get("/login", userController.login)
userView.get("/admin", userController.controllerLogin)

export default userView