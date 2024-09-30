const socket = () => (socket) => {
    console.log('a user connected' + socket.id)
}

export default socket