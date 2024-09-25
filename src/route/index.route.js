import { Router } from "express";
import apiRouter from "./apis/api.index.js";
import viewRouter from './view/index.view.js';

const router = Router()

router.use("/api", apiRouter)
router.use("/api", viewRouter)


export default router;