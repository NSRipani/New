import { Router } from "express";
import ticketController from "../../controllers/ticket.controller.js";

const ticketRouter = Router()

ticketRouter.post("/", ticketController.create)
ticketRouter.get("/", ticketController.readAllTickets)
ticketRouter.get("/:id", ticketController.idTickets)
ticketRouter.put("/:id", ticketController.update)
ticketRouter.delete("/:id", ticketController.delete)

export default ticketRouter