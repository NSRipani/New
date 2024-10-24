// se crea el model de como se guardan los datos
import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const collection = "users";
const schema = new Schema({
    photo: { type: String, default: "https://www.shutterstock.com/image-vector/silver-membership-icon-default-avatar-260nw-2499645557.jpg" },
    email: { type: String, required: true, index: true },
    password: { type: Number, require: true },
    role: { type: String, required: true, index: true}
});

schema.plugin(mongoosePaginate)

const Users = model(collection, schema);
export default Users;