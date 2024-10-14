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
    
        try {
            const { email, password } = data; // Obtener el email y la contraseña del cliente
            // Llamar a la función que valida las credenciales
            const dataUser = await usersManager.readByCredentials(email, password);
            
            if (dataUser) {
                console.log(dataUser)
                socket.emit('loginResponse', { success: true, user: dataUser });
            } else {
                socket.emit('loginResponse', { success: false, message: 'Credenciales incorrectas' });
            }
        } catch (error) {
            console.error("Error durante el login: ", error);
            socket.emit('loginResponse', { success: false, message: 'Error en el servidor' });
        }
    });
}

export default socket