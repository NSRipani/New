import { Router } from "express";
import { showProducts, detailProduct } from "../../controllers/product.controller.js";

const productView = Router()

productView.get("/", showProducts)
productView.get("/:id", detailProduct)

export default productView