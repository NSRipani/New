import "dotenv/config.js"
import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import { engine } from 'express-handlebars'
import { Server } from "socket.io";
import errorHandler from "./src/middleware/errorHandler.js";
import pathHandler from "./src/middleware/pathHandler.js";
import router from './src/route/index.route.js';
import { __dirname } from './utils.js';
import socket from "./src/route/index.socket.js";
import { createServer } from 'http';
import dbConnect from "./src/utils/db.utils.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";

const server = express();

const storeConfig = {
    store: MongoStore.create({
        mongoUrl: process.env.LINK_MONGO,
        crypto: { secret: process.env.SECRET_KEY },
        ttl: 180,
    }),
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 180000 }
};

const port = process.env.PORT;
const ready = () => {
    console.log("server ready on port " + port);
    dbConnect()
}
const httpServer = createServer(server);
httpServer.listen(port, ready);

const socketServer = new Server(httpServer);
socketServer.on("connection", socket);
export {socketServer}

server.engine("handlebars", engine())
server.set("view engine", "handlebars")
server.set("views", __dirname + "/src/views")

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cookieParser())
server.use(session(storeConfig))

server.use(passport.initialize());
server.use(passport.session());

server.use(morgan('dev'))
server.use(cors())
server.use('/public', express.static(__dirname + '/public'));

server.use(router)

server.use(errorHandler);
server.use(pathHandler)

