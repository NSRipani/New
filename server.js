import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import { engine } from 'express-handlebars'
import { Server } from "socket.io";
import errorHandler from "./src/middleware/errorHandler.js";
import pathHandler from "./src/middleware/pathHandler.js";
import router from './src/route/index.route.js';
import __dirname from './utils.js';
import socket from "./src/route/index.socket.js";
import { createServer } from 'http';

try {
    const server = express();
    const port = 8000;
    const ready = () => console.log("server ready on port " + port);
    const httpServer = createServer(server);
    httpServer.listen(port, ready);
    
    const socketServer = new Server(httpServer);
    socketServer.on("connection", socket);

    server.engine("handlebars", engine())
    server.set("view engine", "handlebars")
    server.set("views", __dirname + "/src/views")

    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.use(morgan('dev'))
    server.use(cors())
    server.use('/public', express.static('public'));
    
    server.use(router)
    
    server.use(errorHandler);
    server.use(pathHandler)
    
} catch (error) {
    console.log(error)
} 