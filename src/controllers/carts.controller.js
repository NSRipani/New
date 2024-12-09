import { cartsDao } from '../dao/mongo/dao.carts.js';
import { cartService } from './../service/carts.service.js';
import Controllers from './controller.js';

class CartController extends Controllers {
    constructor() {
        super(cartService)
    }
    async create(req, res, next) {
        try {
            const data = req.body
            const response = await cartService.create(data)
            return res.status(201).json({
                message: "CART CREATED",
                response: response._id
            })
        } catch (error) {
            return next(error)
        }
    }
    async readAll(req, res, next) {
        try {
            const response = await cartService.getAll()
            if (response.length > 0) {
                return res.status(200).json({ message: "CARTS READ", response });
            } else {
                const error = new Error("CARTS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }
    async readID(req, res, next){
        try {
            const { id } = req.params;
            const response = await cartService.readCartsByID(id);
            if (response) {
                return res.status(200).json({ message: "CART READ", response });
            } else {
                const error = new Error("CART NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }
}
const cartsController = new CartController();
export default cartsController;
// const update = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const data = req.body;
//         const response = await cartsDao.update(id, data);
//         if (response) {
//             return res
//                 .status(200)
//                 .json({ message: "CART UPDATE", response });
//         } else {
//             const error = new Error("CART NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }
// const destroy = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const response = await cartsDao.destroy(id);
//         if (response) {
//             return res
//                 .status(200)
//                 .json({ message: "CART DELETED", response });
//         } else {
//             const error = new Error("CART NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }

// const cart = (req, res, next) => {
//     try {
//         return res.render('cart');
//     } catch (error) {
//         return next(error)
//     }
// }

// export  {create, read, readAll, update, destroy, cart}