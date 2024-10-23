const socket = io(); 

const btnLogout = document.querySelector('#btn-logout');

btnLogout.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar la acción por defecto del enlace
    // Emitir el evento de cierre de sesión
    socket.emit('logout');

    // Eliminar el token de sesión local
    localStorage.removeItem('sessionToken');

    // Mostrar mensaje de confirmación
    Toastify({
        text: "Has cerrado sesión exitosamente",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5722",
    }).showToast();

    // Redirigir al usuario a la página de inicio o login
    window.location.href = "/login"; // Cambia esto a la URL deseadaseada
});