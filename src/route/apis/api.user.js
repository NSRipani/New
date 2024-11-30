import { Router } from "express";
import usersController from "../../controllers/user.controller.js";


const userRouter = Router()

userRouter.post("/", usersController.create)
userRouter.get("/:id",usersController.read)
userRouter.get("/", usersController.readAll)
userRouter.put("/:id", usersController.update)
userRouter.delete("/:id", usersController.destroy)

export default userRouter;