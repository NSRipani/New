// se crea el model de como se guardan los datos
import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema({
    title: { type: String, required: true },
    photo: {
        type: String,
        default:
        "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg",
    },
    category: { type: String, default: "celulares" },
    price: { type: Number, default: 1, min: 0, max: 1000 },
    stock: { type: Number, default: 1, min: 0 },
});

const Users = model(collection, schema);
export default Users;