import { Router } from "express";
import cartsController from "../../controllers/carts.controller.js";

const cartsRouter = Router()

cartsRouter.post("/", cartsController.create)
cartsRouter.get("/", cartsController.readAll)
cartsRouter.get("/:id", cartsController.readID)
cartsRouter.get("/ticket/:id", cartsController.tickets)
cartsRouter.put("/:id", cartsController.update)
cartsRouter.delete("/:id", cartsController.deleteID)

export default cartsRouter