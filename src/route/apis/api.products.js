import { Router } from "express";
import prodController from './../../controllers/product.controller.js';
import isValidatorProduct from './../../middleware/isValidatorProduct.js';

const prodRouter = Router()

prodRouter.use("/", prodController.getAllProducts)
prodRouter.use("/:id", prodController.getProduct)
prodRouter.use("/", isValidatorProduct, prodController.create)
prodRouter.use("/:id", prodController.updateProduct)
prodRouter.use("/:id", prodController.deleteProduct)

export default prodRouter;