import { Router } from "express";
import apiRouter from "./apis/api.index.js";
import viewRouter from './views/index.view.js';
// import cartsRouter from "./apis/api.cart.js";

const router = Router()

router.use("/api", apiRouter)
router.use("/", viewRouter)


export default router;