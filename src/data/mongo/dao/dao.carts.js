import Cart from "../models/cart.model.js";
import MongoDao from "./dao.mongo.js";


const cartsDao = new MongoDao(Cart)
export default cartsDao
