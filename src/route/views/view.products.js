import { Router } from "express";
import { showProducts } from "../../controllers/product.controller.js";

const productView = Router()

productView.get("/", showProducts)
// productView.get("/:id", detailProduct)
// // productView.get("/products", getAllProducts)
// productView.get("/admin", productsAdmin)



export default productView