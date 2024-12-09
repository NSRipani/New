import { Router } from 'express';
import usersController from './../../controllers/user.controller.js';

const userView = Router()

userView.get("/register", usersController.registerView)
userView.get("/login", usersController.loginView)
userView.get("/panelAdmin", usersController.admin)
userView.get("/admin", usersController.userAdmin)
userView.get("/current", usersController.userDetail)

export default userView