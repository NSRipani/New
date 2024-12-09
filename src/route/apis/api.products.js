import { Router } from "express";
import productController from './../../controllers/product.controller.js';
import isValidatorProduct from './../../middleware/isValidatorProduct.js';

const prodRouter = Router()

prodRouter.post("/", isValidatorProduct, productController.create)
prodRouter.get("/", productController.readAll)
prodRouter.get("/paginate", productController.paginate)
prodRouter.get("/:id", productController.readIdProduct)
prodRouter.put("/:id", productController.update)
prodRouter.delete("/:id", productController.destroy)

export default prodRouter;