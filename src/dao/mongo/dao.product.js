import Product from "../models/products.model.js";
import MongoDao from "./dao.mongo.js";

class ProductDaoMongo extends MongoDao {
    constructor(){
        super(Product);
    }
    create = async (data) => {
        try {
            const one = await this.model.create(data);
            return one;
        } catch (error) {
            throw error;
        }
    }
    // Buscar todos 
    readAll = async () => {
        try {
            return await this.model.find();
        } catch (error) {
            throw new Error(error);
        }
    }
    readID = async (id) => {
        try {
            const one = await this.model.findById(id);
            return one;
        } catch (error) {
            throw error;
        }
    }
    paginate = async (filter, opts) => {
        // paginate va a devolver los documentos paginados
        try {
            opts.lean = true
            const all = await this.model.paginateProducts(filter, opts)
            return all
        } catch (error) {
            throw error
        }
    }
    findByCategory = async (category) => {
        try {
            return await this.readAll(category);
        } catch (error) {
            throw error;
        }
    };
    
    // update = async (id, data) => {
    //     try {
    //         const opts = { new: true };
    //         //para devolver el objeto luego de la modifiacion
    //         const one = await this.update(id, data, opts) 
    //         return one;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    // delete = async (id) => {
    //     try {
    //         const one = await this.model.delete(id)
    //         return one;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
};

export const prodDao = new ProductDaoMongo();

