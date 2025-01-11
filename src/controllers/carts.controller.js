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
            console.log(response)
            return res.status(201).json({ message: "CART CREATED", response })
        } catch (error) {
            return next(error)
        }
    }
    async readAll(req, res, next) {
        try {
            const response = await cartService.readCarts()
            if (response) {
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
                res.status(404).send({ message: "CART NOT FOUND", statusCode: 404 });
            }
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            const response = await cartService.update(id, data);
            if (response) {
                return res.status(200).json({ message: "CART UPDATED", response });
            } else {
                const error = new Error("CART NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }

    async deleteID(req, res, next){
        try {
            const { id } = req.params;
            const response = await cartService.deleteCart(id);
            if (response) {
                return res.status(200).json({ message: "CART DELETED", response });
            } else {
                const error = new Error("CART NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }
    
    async tickets(req, res, next){
        try {
            const { id } = req.params;
            const response = await cartService.aggregation(id)
            console.log(response)
            return res.status(200).json({ response: response })
        } catch (error) {
            console.log(error)
            return next(error);
        }
    }
}
const cartsController = new CartController();
export default cartsController;