import Services from "./serverServices.js";
import { prodDao } from '../dao/mongo/dao.product.js'

class ProductService extends Services {
    constructor(){
        super(prodDao);
    }
    findByCategory = async (category) => {
        try {
            return await this.dao.readAll({ category });
        } catch (error) {
            throw new Error(`Error finding products by category: ${error.message}`);
        }
    };
}

export const prodService = new ProductService();