import express from "express";
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import errorHandler from "./src/middleware/errorHandler.js";
import pathHandler from "./src/middleware/pathHandler.js";
import router from './src/route/index.route.js';

try {
    const server = express();
    const port = 8000;
    
    server.use(morgan('dev'))
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.engine('handlebars', engine());
    server.set('view engine', 'handlebars');
    server.set('views', __dirname + '/src/views');

    
    server.use(router)
    
    server.use(errorHandler);
    server.use(pathHandler)
    
    const ready = () => console.log("server ready on port " + port);
    server.listen(port, ready);

} catch (error) {
    console.log(error)
} 