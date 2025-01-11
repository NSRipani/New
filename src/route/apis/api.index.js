import { Router } from "express";
import userRouter from "./api.user.js";
import prodRouter from "./api.products.js";
import cartsRouter from "./api.cart.js";
import routeremail from "./api.email.js";
// import ticketRouter from "./api.tickets.js";

const apiRouter = Router();

apiRouter.use("/products", prodRouter)
apiRouter.use("/users", userRouter)
apiRouter.use("/carts", cartsRouter)
apiRouter.use("/emails", routeremail)
// apiRouter.use("/order", ticketRouter)


export default apiRouter