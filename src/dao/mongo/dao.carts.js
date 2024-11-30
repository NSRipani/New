import Cart from "../models/cart.model.js";
import MongoDao from "./dao.mongo.js";

class CartDaoMongo  extends MongoDao {
    constructor(){
        super(Cart);
    }
};

export const cartsDao = new CartDaoMongo();
// const cartsDao = new MongoDao(Cart)
// export default cartsDao
