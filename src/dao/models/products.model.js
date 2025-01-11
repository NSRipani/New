// se crea el model de como se guardan los datos

import { Schema, model } from "mongoose";
import  mongoosePaginate from 'mongoose-paginate-v2'


const collection = "products";
const schema = new Schema({
    title: { type: String, required: true },
    photo: { type: String, default: "https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg"},
    category: { type: String, default: "Sin-categoy" },
    price: { type: Number, default: 1, required: true },
    stock: { type: Number, default: 1, required: true }
});

schema.plugin(mongoosePaginate)

const Product = model(collection, schema);
export default Product;