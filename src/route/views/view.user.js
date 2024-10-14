import { Router } from 'express';
import userController from './../../controllers/user.controller.js';

const userView = Router()

userView.get("/", userController.AllUsers)
userView.get("/register", userController.userRegiter)
userView.get("/login", userController.login)
userView.get("/admin", userController.userAdmin)
userView.get("/paneladmin", userController.admin)



export default userView