import Services from './serverServices.js'
import { cartsDao } from './../dao/mongo/dao.carts.js';
import Users from '../dao/models/user.model.js';

class CartService extends Services {
    constructor() {
        super(cartsDao);
    }
   // Leer todos los carritos
    async readCarts() {
        try {
            const carts = await this.getAll();
            return carts;
        } catch (error) {
            throw new Error('Error al leer los carritos: ' + error.message);
        }
    }

    async readCartsByID(id) {
        try {
            const carts = await this.getById(id);
            return carts;
        } catch (error) {
            throw new Error('Error al leer los carritos: ' + error.message);
        }
    }

    // Crear un nuevo carrito
    async createCart() {
        try {
            const newCart = await this.create({...newCart, user_id: Users._id});
            return newCart;
        } catch (error) {
            throw new Error('Error al crear el carrito: ' + error.message);
        }
    }
    // Eliminar un producto
    deleteCart = async (Id) => {
        try {
            const result = await this.delete(Id);
            return result;
        } catch (error) {
            throw new Error(`Error deleting cart: ${error.message}`);
        }
    };
    // // Agregar un producto al carrito
    // async addProductToCart(cartId, productId) {
    //     try {
    //         const updatedCart = await this.dao.addProduct(cartId, productId);
    //         return updatedCart;
    //     } catch (error) {
    //         throw new Error('Error al agregar producto al carrito: ' + error.message);
    //     }
    // }

    // // Remover un producto del carrito
    // async removeProductFromCart(cartId, productId) {
    //     try {
    //         const updatedCart = await this.dao.removeProduct(cartId, productId);
    //         return updatedCart;
    //     } catch (error) {
    //         throw new Error('Error al remover producto del carrito: ' + error.message);
    //     }
    // }
}
export const cartService = new CartService();