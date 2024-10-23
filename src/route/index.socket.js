// import usersManager from "../data/user.manager.js"

import { socketServer } from "../../server.js";
import productsMongoManager from "../data/mongo/manager/products.manager.js";
// import productsMongoManager from "../data/mongo/manager/products.manager.js";
import usersMongoManager from "../data/mongo/manager/user.manager.js";



const socket = (socket) => {
    console.log(socket.id)

    socket.on("products filter", async category => {
        const data = await  productsMongoManager.readAll();
        const products = category ? data.filter(product => product.category.toLowerCase() === category.toLowerCase()) : data;

        socketServer.emit("producs filtered", products)
    })

    socket.on('login', async (data) => {
    
        try {
            const { email, password } = data; // Obtener el email y la contraseña del cliente
            // Llamar a la función que valida las credenciales
            const dataUser = await usersMongoManager.readLogin(email, password);
            
            if (dataUser) {
                socket.emit('loginResponse', { success: true, user: dataUser });
            } else {
                socket.emit('loginResponse', { success: false, message: 'Credenciales incorrectas' });
            }
        } catch (error) {
            console.error("Error durante el login: ", error);
            socket.emit('loginResponse', { success: false, message: 'Error en el servidor' });
        }
    });

    socket.on('logout', () => {
        // Aquí puedes realizar cualquier limpieza necesaria
        console.log('Usuario desconectado: ' + socket.id);
        // Si estás usando sesiones en el servidor, puedes invalidar la sesión aquí
    });
}

export default socket