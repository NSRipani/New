import Users from "../models/user.model.js";
import MongoDao from "./dao.mongo.js";

class UserDaoMongo extends MongoDao {
    constructor() {
        super(Users)
    }
    
    // Registrar un nuevo usuario
    async register(user) {
        try {
            const regUser = await this.create(user);
            return regUser
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar todos los usuarios
    async getAll() {
        try {
            return await this.readAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar usuario por ID
    async getById(id) {
        try {
            const user = await this.readById(id)
            if (!user) throw new Error(`Usuario con ID ${id} no encontrado.`);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar usuario por Email
    async getByEmail(email) {
        try {
            return await this.findByEmail(email)
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
            const one = await this.destroy(id)
            return one;
        } catch (error) {
            throw error;
        }
    }
    // Ejemplo: Cambiar contraseña
    updatePassword = async (id, newPassword) => {
        try {
            return await this.findOneAndUpdate(
                { _id: id },
                { password: newPassword },
                { new: true }
            );
        } catch (error) {
            throw error;
        }
    };
}

export const userDao = new UserDaoMongo();

