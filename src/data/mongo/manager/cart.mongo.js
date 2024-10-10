import Cart from "../models/cart.model.js";
import MongoManager from "./manager.mongo.js";


const productsMongoManager = new MongoManager(Cart)
export default productsMongoManager
