import { Router } from "express";
import {create, read, readAll, update, destroy} from './../../controllers/carts.controller.js';

const cartsRouter = Router()

cartsRouter.post("/", create)
cartsRouter.get("/:id", read)
cartsRouter.get("/", readAll)
cartsRouter.put("/:id", update)
cartsRouter.delete("/:id", destroy)

export default cartsRouter