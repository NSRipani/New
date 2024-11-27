import Users from "../models/user.model.js";
import MongoDao from "./mongo.dao.js";

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
            return await this.model.findOne({ email });
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
}

export const userDao = new UserDaoMongo();

// class UsersMongoManager {
//     async create(data) {
//         try {
//             const one = await Users.create(data);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
//     async readAll(filter) {
//         try {
//             const all = await Users.find(filter);
//             return all;
//         } catch (error) {
//             throw error;
//         }
//     }
//     async read(pid) {
//         try {
//             const one = await Users.findById(pid);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
//     async update(pid, data) {
//         try {
//             const opts = { new: true };
//             //para devolver el objeto luego de la modifiacion
//             const one = await Users.findOneAndUpdate(pid, data, opts);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
//     async destroy(pid) {
//         try {
//             const one = await Users.findOneAndDelete(pid);
//             return one;
//         } catch (error) {
//         throw error;
//         }
//     }
// }


// const usersDao = new MongoDao(Users);
// export default usersDao;