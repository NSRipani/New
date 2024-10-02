import { Router } from "express";
import userController from './../../controllers/user.controller.js';

const userView = Router()

userView.get("/", userController.AllUsers)
// productView.get("/:id", userController.detailProduct)

export default userView