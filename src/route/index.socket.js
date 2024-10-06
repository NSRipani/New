import usersManager from "../data/user.manager.js"
import socketServer  from "../../server.js"
import productsManager from "../data/products.manager.js"

const socket = async (socket) => {
    console.log(socket.id)

    socket.on("new user", async data => {
        const newUser  = await usersManager.create(data)
        const allUsers = await usersManager.AllUsers(newUser)
        socketServer.emit("update user", allUsers )
    })
    const allUsers = await usersManager.AllUsers()
    socket.emit("update user", allUsers )

    socket.on("search products", async data=>{
        const productsFiltered = await productsManager.read(data)
        socket.emit("products filtered", productsFiltered)
    })
}

export default socket