import { Router } from "express";
import productController from './../../controllers/product.controller.js';
import { isValidatorProduct } from './../../middleware/isValidatorProduct.js';
import { roleAuth } from './../../middleware/roleUser.js';
import { passportCall } from "../../passport/passportCall.js";

const prodRouter = Router()

prodRouter.use(passportCall("current"))

prodRouter.post("/", roleAuth('admin'), isValidatorProduct, productController.create)
prodRouter.get("/", productController.readAll)
prodRouter.get("/filter", productController.readCategory)
prodRouter.get("/paginate", productController.paginate)
prodRouter.get("/:id", roleAuth('admin'), productController.readIdProduct)
prodRouter.put("/:id", roleAuth('admin'), isValidatorProduct, productController.update)
prodRouter.delete("/:id", roleAuth('admin'), productController.delete)

export default prodRouter;