// import Services from './serverServices.js'
// import { ticketDao } from '../dao/mongo/dao.tickets.js'

// class TicketsService extends Services {
//     constructor() {
//         super(ticketDao);
//     }  
//     order = async() => {
//         try {
//             const order = await this.aggregation()
//             if (order) {
//                 const detalle = await ticketDao.create({...order, 
//                     purchaser: order.email,
//                     amount: order.total, 
//                     purchase_datetime: new Date()
//                 })
//                 return detalle
//             }
//         } catch (error) {
//             throw error
//         }
//     }

// }


// export const ticketsService = new TicketsService();