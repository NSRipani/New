import { Router } from "express";
import userRouter from "./api.user.js";
import prodRouter from "./api.products.js";
import cartsRouter from "./api.cart.js";

const apiRouter = Router();

apiRouter.use("/products", prodRouter)
apiRouter.use("/users", userRouter)
apiRouter.use("/carts", cartsRouter)

export default apiRouter