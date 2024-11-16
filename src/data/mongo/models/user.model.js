// se crea el model de como se guardan los datos
import { Schema, model, Types } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const collection = "users";
const schema = new Schema({
    first_name: {type: String, require: true},
    last_name: {type: String, require: true},
    email: { type: String, required: true, index: true },
    age: {type: Number, require: true},
    password: { type: Number, require: true },
    cart_id: {type: Types.ObjectId, ref: "carts", required: true},
    role: { type: String, default: "user", index: true}
});

schema.plugin(mongoosePaginate)

const Users = model(collection, schema);
export default Users;