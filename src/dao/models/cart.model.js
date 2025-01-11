// se crea el model de como se guardan los datos
import { Schema, model, Types} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const collection = "carts";
const schema = new Schema({
    user_id: {type: Types.ObjectId, ref: "users", required: true},
    products_id: {type: Types.ObjectId, ref: "products", required: true},
    quantity: { type: Number, required: true },
    price: {type: Number, required: true },
    state: { type: String, enum: ["reserved", "paid", "delivered"], default: "reserved" }
});

schema.pre("find", function(){
    this.populate("user_id", "email").populate("products_id", "price stock")
})
schema.pre("findOne", function(){
    this.populate("user_id", "email").populate("products_id", "price stock")
})

schema.pre("findOneAndUpdate", function(){
    this.populate("user_id", "email").populate("products_id", "price stock")
})
schema.pre("findOneAndDelete", function(){
    this.populate("user_id", "email").populate("products_id", "price stock")
})

schema.plugin(mongoosePaginate)

const Cart = model(collection, schema);
export default Cart;