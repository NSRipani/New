const socket = io();

const btnlogin = document.querySelector('#btn-login');

btnlogin.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Validación básica del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !emailPattern.test(email)) {
        Toastify({
            text: "Por favor, complete todos los campos",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#F44336",
        }).showToast();
        return;
    }

    const data = { email, password };

    socket.emit('login', data);
});

socket.on('loginResponse', function(response) {
    if (response.success) {
        localStorage.setItem('sessionToken', response.token);
        localStorage.setItem('role', response.role);

        Toastify({
            text: "Inicio de sesión exitoso",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#4CAF50",
        }).showToast();

        // Redirección basada en el rol
        if (response.role === 'admin') {
            window.location.href = '/users/panelAdmin'; // Redirigir a panel de administrador
        } else {
            window.location.href = '/';
        }
        const navItem = document.querySelector('#nav-item a');
        navItem.textContent = 'Online';
        
        // Mostrar el enlace de Admin si el rol es 'admin'
        if (response.role === 'admin') {
            const adminLink = document.querySelector('#admin-link');
            adminLink.style.display = 'block'; // Mostrar el enlace de Admin
        }
    } else {
        Toastify({
            text: `Error: ${response.message}`,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#F44336",
        }).showToast();
    }
});
// Manejo de errores de conexión
socket.on('connect_error', (error) => {
    Toastify({
        text: "Error de conexión. Inténtalo de nuevo más tarde.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#F44336",
    }).showToast();
});

document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn()) {
        const role = localStorage.getItem('role');
        
        if (role === 'admin') {
            const adminLink = document.querySelector('#admin-link');
            if (adminLink) {
                adminLink.style.display = 'block';
            }
        }
    }
});

function isLoggedIn() {
    return localStorage.getItem('sessionToken') !== null;
}



