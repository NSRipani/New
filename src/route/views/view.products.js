import { Router } from "express";
import { prodAdmin, showProducts } from "../../controllers/product.controller.js";

const productView = Router()

productView.get("/", showProducts)
productView.get("/admin", prodAdmin)

export default productView