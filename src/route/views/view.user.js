import { Router } from 'express';
import userController from './../../controllers/user.controller.js';


const userView = Router()

userView.get("/home", userController.AllUsers)
// userView.get("/:id", userController.userProfile)
userView.get("/register", userController.userRegiter)
userView.get("/login", userController.login)
// userView.get("/users/admin", )



export default userView