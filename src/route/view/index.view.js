import { Router } from "express";
import productView from './products.view.js';
import userView from './user.view.js';
import cartView from './carts.view.js';

const viewRouter = Router()

viewRouter.use("/products", productView);
viewRouter.use("/users", userView);
viewRouter.use("/carts", cartView);

export default viewRouter