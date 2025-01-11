// import { ticketsService } from './../service/tickets.service.js';
// import Controllers from './controller.js';

// class TicketController extends Controllers {
//     constructor() {
//         super(ticketsService)
//     }

//     async crearTicket() {
//         try {
//             const newTicket = await ticketsService.order()
//             return res.status(200).json({ message: "TICKET CEATED", newTicket });
//         } catch (error) {
//             throw new Error('Error al crear el Ticket: ' + error.message);
//         }
//     }
// }

// const ticketController = new TicketController()
// export default ticketController