// se crea el model de como se guardan los datos
import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema({
    title: { type: String, required: true },
    photo: {
        type: String,
        default:
        "https://www.shutterstock.com/image-vector/silver-membership-icon-default-avatar-260nw-2499645557.jpg",
    },
    category: { type: String, default: "celulares" },
    price: { type: Number, default: 1, min: 0, max: 1000 },
    stock: { type: Number, default: 1, min: 0 },
});

const Users = model(collection, schema);
export default Users;