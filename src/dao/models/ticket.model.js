import { Schema, model, Types} from 'mongoose';

const collection = 'tickets';
const schema = new Schema({
    purchase_datetime: { type: Date, default: Date.now }, // fecha
    amount: { type: Number, required: true }, // total de la compra
    purchaser: { type: String, required: true }, // comprador
});

const Tickets = model(collection, schema);
export default Tickets;