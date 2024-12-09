import { Router } from "express";
import cartsController from "../../controllers/carts.controller.js";

const cartsRouter = Router()

cartsRouter.post("/", cartsController.create)
cartsRouter.get("/:id", cartsController.readID)
cartsRouter.get("/", cartsController.readAll)
// cartsRouter.put("/:id", update)
cartsRouter.delete("/:id", cartsController.deleteID)

export default cartsRouter