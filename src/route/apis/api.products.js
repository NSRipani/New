import { Router } from "express";
import {create, read, readAll, update, destroy, paginate} from './../../controllers/product.controller.js';
// import isValidatorProduct from './../../middleware/isValidatorProduct.js';

const prodRouter = Router()

prodRouter.post("/", create)
prodRouter.get("/", readAll)
prodRouter.get("/paginate", paginate)
prodRouter.get("/:id", read)
prodRouter.put("/:id", update)
prodRouter.delete("/:id", destroy)

export default prodRouter;