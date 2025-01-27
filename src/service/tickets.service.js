import Services from './serverServices.js'
import { ticketDao } from '../dao/mongo/dao.tickets.js'

class TicketsService extends Services {
    constructor() {
        super(ticketDao);
    }  
    // order = async() => {
    //     try {
    //         const order = await this.aggregation()
    //         if (order) {
    //             const detalle = await ticketDao.create({...order, 
    //                 purchaser: order.email,
    //                 amount: order.total, 
    //                 purchase_datetime: new Date()
    //             })
    //             return detalle
    //         }
    //     } catch (error) {
    //         throw error
    //     }
    // }
// Crear un nuevo producto
    create = async (data) => {
        try {
            const ticket = await this.dao.create(data);
            return ticket;
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    };
    // Leer todos los productos
    readTickets = async () => {
        try {
            return await this.dao.readAll();
        } catch (error) {
            throw new Error(`Error reading products: ${error.message}`);
        }
    };
    // Leer por ID
    readTicketsId = async (id) => {
        try {
            return await this.dao.readID(id)
        } catch (error) {
            throw new Error(`Error reading products: ${error.message}`);
        }
    };
    // Actualizar un producto existente
    update = async (id, ticketData) => {
        try {
            const opts = { new: true };
            const updatedTicket = await this.dao.update(id, ticketData,opts);
            return updatedTicket;
        } catch (error) {
            throw new Error(`Error updating product: ${error.message}`);
        }
    };
}


export const ticketsService = new TicketsService();