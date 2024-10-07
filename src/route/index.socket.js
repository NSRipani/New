import usersManager from "../data/user.manager.js"
import productsManager from "../data/products.manager.js"
import { socketServer } from "../../server.js";

const socket = (socket) => {
    console.log(socket.id)

    
    // Escuchar el evento de login
    // socket.on('login', async (data) => {
    //     const { email, password } = data;

    //     try {
    //         // Buscar al usuario por su email
    //         const user = await usersManager.readOne( email );

    //         if (!user) {
    //             // Si el usuario no existe
    //             socket.emit('loginError', { message: 'Usuario no encontrado' });
    //             return;
    //         }

    //         // Comparar la contraseña
    //         const match = await bcrypt.compare(password, user.password);
    //         if (!match) {
    //             // Si la contraseña es incorrecta
    //             socketServer.emit('loginError', { message: 'Contraseña incorrecta' });
    //             return;
    //         }

    //         // Si el inicio de sesión es exitoso
    //         socketServer.emit('loginSuccess', { message: 'Inicio de sesión exitoso' });
    //     } catch (error) {
    //         console.error(error);
    //         socketServer.emit('loginError', { message: 'Error en el servidor' });
    //     }
    // });

    // // Manejar la desconexión del cliente
    // socket.on('disconnect', () => {
    //     console.log('Cliente desconectado:', socket.id);
    // });

    socket.on("products filter", async category => {
        const data = await productsManager.read();
        
        const products = data.filter(product => product.category.toLowerCase() === category.toLowerCase());

        socketServer.emit("producs filtered", products)
    })

    // socket.on('new user', async (dataUser) => {
    //     try {
    //         // Aquí procesas el registro del usuario con los datos recibidos
    //         const { email, password, role, photo } = dataUser;
    //         const result = await usersManager.read(email)
            
    //         // Lógica para guardar el usuario en la base de datos
    //         // Por ejemplo, utilizando una función `registerUser` que devuelve el estado del registro
    //         // const result = await registerUser({ email, password, role, photo });

    //         if (result.success) {
    //             socket.emit("user registered", { status: "success" });
    //         } else {
    //             socket.emit("user registered", { status: "error", message: result.message });
    //         }
    //     } catch (error) {
    //         return next(error)
    //     }
    // });
}

export default socket