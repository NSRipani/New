import Product from "../models/products.model.js";
import MongoDao from "./dao.mongo.js";

// class ProductsMongoManager {
//     create = async (data) => {
//         try {
//             const one = await Product.create(data);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
//     readAll = async (filter) => {
//         try {
//             const all = await Product.find(filter);
//             return all;
//         } catch (error) {
//             throw error;
//         }
//     }
//     read = async (id) => {
//         try {
//             const one = await Product.findById(id);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
//     update = async (id, data) => {
//         try {
//             const opts = { new: true };
//             //para devolver el objeto luego de la modifiacion
//             const one = await Product.findOneAndUpdate(id, data, opts);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
//     destroy = async (pid) => {
//         try {
//             const one = await Product.findOneAndDelete(pid);
//             return one;
//         } catch (error) {
//             throw error;
//         }
//     }
// }

const productsDao = new MongoDao(Product);
export default productsDao;
