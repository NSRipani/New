import usersManager from "../data/user.manager.js"

const socket = (socket) => {
    console.log(socket.id)

    socket.on("new user", async data => {
        const newUser  = await usersManager.create(data)

        socket.emit("update user", newUser )
    })
}

export default socket