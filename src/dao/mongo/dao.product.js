import Product from "../models/products.model.js";
import MongoDao from "./dao.mongo.js";

class ProductDaoMongo extends MongoDao {
    constructor(){
        super(Product);
    }
    create = async (data) => {
        try {
            const one = await this.create(data);
            return one;
        } catch (error) {
            throw error;
        }
    }
    read = async (id) => {
        try {
            const one = await this.findById(id);
            return one;
        } catch (error) {
            throw error;
        }
    }
    paginate = async (filter, opts) => {
        // paginate va a devolver los documentos paginados
        try {
            opts.lean = true
            const all = await this.paginate(filter, opts)
            return all
        } catch (error) {
            throw error
        }
    }
    findByCategory = async (category) => {
        try {
            return await this.find({ category }).lean();
        } catch (error) {
            throw error;
        }
    };
    
    update = async (id, data) => {
        try {
            const opts = { new: true };
            //para devolver el objeto luego de la modifiacion
            const one = await this.findOneAndUpdate(id, data, opts);
            return one;
        } catch (error) {
            throw error;
        }
    }
    destroy = async (id) => {
        try {
            const one = await this.findOneAndDelete(id);
            return one;
        } catch (error) {
            throw error;
        }
    }
};

export const prodDao = new ProductDaoMongo();