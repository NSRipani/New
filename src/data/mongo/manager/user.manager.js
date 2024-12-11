import Users from "../models/user.model.js";
import MongoManager from "./manager.mongo.js";

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


const usersMongoManager = new MongoManager(Users);
export default usersMongoManager;