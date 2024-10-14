// se crea el model de como se guardan los datos
import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema({
    photo: { type: String, default: "https://www.shutterstock.com/image-vector/silver-membership-icon-default-avatar-260nw-2499645557.jpg" },
    email: { type: String, required: true },
    password: { type: Number, require: true, min: 6},
    role: { type: String, required: true }
});

const Users = model(collection, schema);
export default Users;