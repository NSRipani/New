import Users from "../models/user.model.js";
import MongoDao from "./dao.mongo.js";

class UserDaoMongo extends MongoDao {
    constructor() {
        super(Users)
    }

    async register(user) {
        try {
            const regUser = await this.model.create(user);
            return regUser
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try {
            return await this.model.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async getByEmail(email) {
        try {
            return await this.model.findOne({ email }).lean(true);
        } catch (error) {
            throw new Error(error);
        }
    }
    async update(id, data) {
        try {
            const opts = { new: true };
            //para devolver el objeto luego de la modifiacion
            const one = await this.model.findOneAndUpdate(id, data, opts);
            return one;
        } catch (error) {
            throw error;
        }
    }
    async destroy(id) {
        try {
            const one = await this.model.findOneAndDelete(id);
            return one;
        } catch (error) {
            throw error;
        }
    }
    // Ejemplo: Cambiar contraseña
    updatePassword = async (id, newPassword) => {
        try {
            return await this.model.findOneAndUpdate(
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

