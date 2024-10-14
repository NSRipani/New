const socket = io();

const btnlogin = document.querySelector('#btn-login');

btnlogin.addEventListener("click", (event) => {
    event.preventDefault();
    
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const data = { email, password };
    console.log(data)
    
    // Emitir evento de inicio de sesión
    socket.emit('login', data);
});

// Escuchar la respuesta del servidor
socket.on('loginResponse', function(response) {
    if (response.success) {
        // Si el inicio de sesión fue exitoso
        Toastify({
            text: "Inicio de sesión exitoso",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#4CAF50",
        }).showToast();
        
        // Redirigir o realizar otra acción
        window.location.href = "/";
    } else {
        // Si hubo un error
        Toastify({
            text: `Error: ${response.message}`,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#F44336",
        }).showToast();
    }
});
