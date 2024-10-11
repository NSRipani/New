// import usersManager from "../data/user.manager.js"

import { socketServer } from "../../server.js";
import productsManager from './../data/fs/products.manager.js';


const socket = (socket) => {
    console.log(socket.id)


    socket.on("products filter", async category => {
        const data = await productsManager.read();
        
        const products = data.filter(product => product.category.toLowerCase() === category.toLowerCase());

        socketServer.emit("producs filtered", products)
    })

}

export default socket