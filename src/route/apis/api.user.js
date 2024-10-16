import { Router } from "express";
import {create, read, readAll, update, destroy} from "../../controllers/user.controller.js";
// import isValidatorUser from "../../middleware/isValidatorUser.js";


const userRouter = Router()

userRouter.post("/", create)
userRouter.get("/:id",read)
userRouter.get("/", readAll)
userRouter.put("/:id", update)
userRouter.delete("/:id", destroy)

export default userRouter;