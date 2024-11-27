import Cart from "../models/cart.model.js";
import MongoDao from "./dao.mongo.js";
import cartsDao from './dao.carts';

class ProductDaoMongo extends MongoDao {
    constructor(){
        super(Cart);
    }
};

export const cartsDao = new ProductDaoMongo();
// const cartsDao = new MongoDao(Cart)
// export default cartsDao
