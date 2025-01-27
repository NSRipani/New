import { Router } from "express";
import apiRouter from "./apis/api.index.js";
// import viewRouter from './views/index.view.js';

const router = Router()

router.use("/api", apiRouter)
// router.use("/", apiRouter)


export default router;