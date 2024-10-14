// import usersManager from "../data/user.manager.js"

import { socketServer } from "../../server.js";
import usersManager from "../data/fs/user.manager.js";
import productsManager from './../data/fs/products.manager.js';


const socket = (socket) => {
    console.log(socket.id)

    socket.on("products filter", async category => {
        const data = await productsManager.read();
        const products = category ? data.filter(product => product.category.toLowerCase() === category.toLowerCase()) : data;

        socketServer.emit("producs filtered", products)
    })

    socket.on('login', async (data) => {
        console.log(data)
        // const { email, password } = data;
        const dataUser = await usersManager.read(email, password);
        if (dataUser) {
            socket.emit('loginResponse', { success: true });
            // return res.render("", {users: dataUser});
        } else {
            socket.emit('loginResponse', { success: false, message: 'Credenciales incorrectas' });
        }
    });
}

export default socket