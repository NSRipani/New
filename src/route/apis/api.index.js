import { Router } from "express";
import userRoute from "./api.user.js";
import prodRouter from './api.products.js';
import cartsRouter from "./api.cart.js";

const apiRouter = Router();

apiRouter.use("/products", prodRouter)
apiRouter.use("/users", userRoute)
apiRouter.use("/carts", cartsRouter)

export default apiRouter