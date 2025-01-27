import MongoDao from "./dao.mongo.js";
import Tickets from './../models/ticket.model.js';

class TicketsDaoMongo  extends MongoDao {
    constructor(){
        super(Tickets);
    }
    create = async (data) => {
        try {
            const one = await this.model.create(data);
            return one;
        } catch (error) {
            throw error;
        }
    }
    // Buscar todos 
    readAll = async () => {
        try {
            return await this.model.find();
        } catch (error) {
            throw new Error(error);
        }
    }
    readID = async (id) => {
        try {
            const one = await this.model.findById(id);
            return one;
        } catch (error) {
            throw error;
        }
    }
}

export const ticketDao = new TicketsDaoMongo();