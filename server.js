import "dotenv/config.js"
import express from "express";
import morgan from 'morgan';
import cors from 'cors'
// import { engine } from 'express-handlebars'
// import { Server } from "socket.io";
// import router from '.src/route/index.route.js';
import { __dirname } from './utils.js'
import { createServer } from 'http';
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import './src/passport/jwtStrategy.js'
import errorHandler from './src/middleware/errorHandler.js';
import router from './src/route/index.route.js';
import pathHandler from './src/middleware/pathHandler.js';
import dbConnect from './src/utils/db.utils.js';

const server = express();

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
};

const storeConfig = {
    store: MongoStore.create({
        mongoUrl: process.env.LINK_MONGO,
        crypto: { secret: process.env.SECRET_KEY },
        ttl: 180,
    }),
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true
};

const port = process.env.PORT;
const ready = () => {
    console.log("server ready on port " + port);
    dbConnect()
}
const httpServer = createServer(server);
httpServer.listen(port, ready);

// const socketServer = new Server(httpServer);
// socketServer.on("connection", socket);
// export {socketServer}

// server.engine("handlebars", engine())
// server.set("view engine", "handlebars")
// server.set("views", __dirname + "/src/views")

server.use(cors(corsOptions))
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cookieParser())
server.use(session(storeConfig))

server.use(passport.initialize());
server.use(passport.session());

server.use(morgan('dev'))
// server.use('/public', express.static(__dirname + '/public'));

server.use(router)

server.use(errorHandler);
server.use(pathHandler)


