import Cart from "../models/cart.model.js";
import MongoDao from "./dao.mongo.js";

class CartDaoMongo  extends MongoDao {
    constructor(){
        super(Cart);
    }
    // Registrar un nuevo usuario
    async register(cart) {
        try {
            const regCart = await this.create(cart);
            return regCart
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar todos los usuarios
    async getAllCart() {
        try {
            return await this.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar usuario por ID
    async cartById(id) {
        try {
            const user = await this.findById(id)
            if (!user) throw new Error(`Usuario con ID ${id} no encontrado.`);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    // Actualizar por ID
    async update(id, data) {
        try {
            //para devolver el objeto luego de la modifiacion
            const one = await this.update(id, data);
            return one;
        } catch (error) {
            throw error;
        }
    }
    
    // Eliminar por ID
    async delete(id) {
        try {
            const one = await this.delete(id)
            return one;
        } catch (error) {
            throw error;
        }
    }
};

export const cartsDao = new CartDaoMongo();
