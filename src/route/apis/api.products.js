import { Router } from "express";
import prodController from './../../controllers/product.controller.js';
import isValidatorProduct from './../../middleware/isValidatorProduct.js';

const prodRouter = Router()

prodRouter.get("/", prodController.getAllProducts)
prodRouter.get("/:id", prodController.getProduct)
prodRouter.post("/", isValidatorProduct, prodController.create)
prodRouter.put("/:id", prodController.updateProduct)
prodRouter.delete("/:id", prodController.deleteProduct)

export default prodRouter;