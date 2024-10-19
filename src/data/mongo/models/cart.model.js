// se crea el model de como se guardan los datos
import { Schema, model, Types} from "mongoose";
import mongoosePaginator from 'mongoose-paginate-v2'

const collection = "carts";
const schema = new Schema({
    user_id: {type: Types.ObjectId, ref: "users", required: true},
    products_id: {type: Types.ObjectId, ref: "products", required: true},
    quantity: { type: String, required: true },
    state: { type: String, default: "reserved", enum: ["reserved", "paid", "delivered"] }
});

schema.pre("find", function(){
    this.populate("user_id", "email").populate("products_id", "price stock")
})

schema.pre("findOneAndUpdate", function(){
    this.populate("user_id", "email").populate("products_id", "price stock")
})


schema.plugin(mongoosePaginator)

const Cart = model(collection, schema);
export default Cart;