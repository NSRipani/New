// se crea el model de como se guardan los datos
import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema({
    _id: {type: String, required: true},
    _idUser: {type: String, required: true},
    _idProduct:{type: String, required: true},
    title: { type: String, required: true },
    photo: {
        type: String,
        default:
        "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg",
    },
    category: { type: String, default: "celulares" },
    price: { type: Number, default: 1},
    stock: { type: Number, default: 1}
});

const Cart = model(collection, schema);
export default Cart;