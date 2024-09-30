// import { Router } from "express";
// import productView from './view.products.js';
// import userView from './view.user.js';
// import cartView from './view.carts.js';

// const viewRouter = Router()

// viewRouter.use("/products", productView);
// viewRouter.use("/users", userView);
// viewRouter.use("/carts", cartView);
// viewRouter.get("/", (req, res, next) => {
//     try {
//         return res.render("index", {})
//     } catch (error) {
//         return next(error)
//     }
// })
// export default viewRouter

import { Router } from "express";
import productView from './view.products.js';
import userView from './view.user.js';
import cartView from './view.carts.js';

const viewRouter = Router();

viewRouter.use("/products", productView);
viewRouter.use("/users", userView);
viewRouter.use("/carts", cartView);

viewRouter.get('/register',()=>{ })
viewRouter.get('/products',()=>{ })
viewRouter.get('/new-product',()=>{ })
viewRouter.get('/orders',()=>{ })

viewRouter.get("/", (req, res, next) => {
    try {
        return res.render("home");
    } catch (error) {
        return next(error);
    }
})
    

export default viewRouter;
