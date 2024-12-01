import { Router } from 'express';
import usersController from './../../controllers/user.controller.js';

const userView = Router()

userView.get("/register", usersController.regiterView)
userView.get("/login", usersController.loginView)
userView.get("/panelAdmin", usersController.admin)
userView.get("/admin", usersController.userAdmin)

export default userView