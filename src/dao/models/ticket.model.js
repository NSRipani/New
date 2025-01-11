import { Schema, model, Types} from 'mongoose';
// import uuid  from 'uuid';

const collection = 'tickets';
const schema = new Schema({
    // code: { type: String, unique: uuid }, // codigo unico
    purchase_datetime: { type: Date, default: Date.now }, // fecha
    amount: { type: Number, required: true }, // total de la compra
    purchaser: { type: String, required: true, index: true }, // comprador
});

const Tickets = model(collection, schema);
export default Tickets;