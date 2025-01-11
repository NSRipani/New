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
    async allUsers() {
        try {
            return await this.find();
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar usuario por ID
    async getById(id) {
        try {
            const user = await this.findById(id)
            if (!user) throw new Error(`Usuario con ID ${id} no encontrado.`);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar usuario por Email
    async findByEmail(email) {
        try {
            return await this.findByEmail({ email });
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar usuario por ROL
    async findByRole(role) {
        try {
            return await this.model.findByRole({ role });
        } catch (error) {
            throw new Error(error);
        }
    }
    
    // Actualizar por ID
    async update(id, data) {
        try {
            const opts = { new: true };
            const one = await this.update(id, data, opts);
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
    // Ejemplo: Cambiar contraseña
    updatePassword = async (id, newPassword) => {
        try {
            return await this.update(
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

