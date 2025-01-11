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
            const carts = await this.findAll();
            return carts;
        } catch (error) {
            throw new Error('Error al leer los carritos: ' + error.message);
        }
    }

    async readCartsByID(id) {

        const carts = await this.getById(id);
        return carts;
    }

    // Crear un nuevo carrito
    async createCart() {
        try {
            const newCart = await this.create({...newCart, user_id: Users._id }); //
            return newCart;
        } catch (error) {
            throw new Error('Error al crear el carrito: ' + error.message);
        }
    }
    // Eliminar un producto
    deleteCart = async (Id) => {
        try {
            const result = await cartsDao.delete(Id);
            return result;
        } catch (error) {
            throw new Error(`Error deleting cart: ${error.message}`);
        }
    };
    // Agregar un producto al carrito
    async update(Id, productId) {
        try {
            const updatedCart = await cartsDao.update(Id, productId);
            return updatedCart;
        } catch (error) {
            throw new Error('Error al agregar producto al carrito: ' + error.message);
        }
    }
    async aggregation(id){
        try {
            const response = await cartsDao.aggregation(id)
            return response
            
        } catch (error) {
            throw error
        }

    }
}
export const cartService = new CartService();