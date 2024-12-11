import Cart from "../models/cart.model.js";
import MongoManager from "./manager.mongo.js";


const cartMongoManager = new MongoManager(Cart)
export default cartMongoManager
