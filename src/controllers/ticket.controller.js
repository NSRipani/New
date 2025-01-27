import { ticketsService } from './../service/tickets.service.js';
import Controllers from './controller.js';

class TicketController extends Controllers {
    constructor() {
        super(ticketsService)
    }

    // async crearTicket() {
    //     try {
    //         const newTicket = await ticketsService.order()
    //         return res.status(200).json({ message: "TICKET CEATED", newTicket });
    //     } catch (error) {
    //         throw new Error('Error al crear el Ticket: ' + error.message);
    //     }
    // }
    async create(req, res, next) {
        try {
            const data = req.body;
            const response = await ticketsService.create(data);
            console.log(response)
            return res.status(201).json({
                message: "TICKET CREATED",
                response: response,
            });
        } catch (error) {
            return next(error);
        }
    }
    async readAllTickets(req, res, next) {
        try {
            // const filter = req.query;
            const response = await ticketsService.readTickets();
            if (response.length > 0) {
                return res.status(200).json({
                    message: "TICKETS READ",
                    response
                });
            } else {
                const error = new Error("TICKETS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }
    async idTickets(req, res, next) {
        try {
            const { id } = req.params;
            const response = await ticketsService.readTicketsId(id);
            if (response) {
                return res.status(200).json({ message: "PRODUCT READ", response });
            } else {
                const error = new Error("PRODUCT NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            const response = await ticketsService.update(id, data);
            if (response) {
                return res.status(200).json({ message: "TICKETS UPDATED", response });
            } else {
                const error = new Error("TICKETS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const response = await ticketsService.delete(id);
            if (response) {
                return res.status(200).json({ message: "TICKETS DELETED", response });
            } else {
                const error = new Error("TICKETS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }
}

const ticketController = new TicketController()
export default ticketController