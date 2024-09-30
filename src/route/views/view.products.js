import { Router } from "express";
import prodController from "../../controllers/product.controller.js";

const productView = Router()

productView.get("/", prodController.showProducts)
productView.get("/:id", prodController.detailProduct)

export default productView