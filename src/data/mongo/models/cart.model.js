// se crea el model de como se guardan los datos
import { Schema, model } from "mongoose";

const collection = "carts";
const schema = new Schema({
    user_id: {type: String, required: true},
    products_id: {type: String, required: true},
    title: { type: String, required: true },
    photo: { type: String, default: "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg" },
    category: { type: String, default: "celulares" },
    price: { type: Number, default: 1},
    stock: { type: Number, default: 1}
});

schema.pre("find", function(){
    this.populate("user_id", "email")
    this.populate("user_id", "role")
    this.populate("products_id")
})

const Cart = model(collection, schema);
export default Cart;