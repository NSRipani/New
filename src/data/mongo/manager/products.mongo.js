import Product from "../models/product.model.js";
import MongoManager from "./manager.mongo.js";

class ProductsMongoManager {
    async create(data) {
        try {
        const one = await Product.create(data);
        return one;
        } catch (error) {
        throw error;
        }
    }
    async readAll(filter) {
        try {
        const all = await Product.find(filter);
        return all;
        } catch (error) {
        throw error;
        }
    }
    async read(pid) {
        try {
        const one = await Product.findById(pid);
        return one;
        } catch (error) {
        throw error;
        }
    }
    async update(pid, data) {
        try {
        const opts = { new: true };
        //para devolver el objeto luego de la modifiacion
        const one = await Product.findByIdAndUpdate(pid, data, opts);
        return one;
        } catch (error) {
        throw error;
        }
    }
    async destroy(pid) {
        try {
        const one = await Product.findByIdAndDelete(pid);
        return one;
        } catch (error) {
        throw error;
        }
    }
}

const ProductsMongoManager = new MongoManager(Product);
export default ProductsMongoManager;
