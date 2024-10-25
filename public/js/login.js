const socket = io();

const btnlogin = document.querySelector('#btn-login');

btnlogin.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!email || !password) {
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

        window.location.href = '/users/panelAdmin'
        const navItem = document.querySelector('#nav-item a');
        navItem.textContent = 'Online';
        
        if (response.role === 'admin') {
            const adminLink = document.querySelector('#admin-link');
            adminLink.style.display = 'block';
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

document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn()) {
        
        if (localStorage.getItem('role') === 'admin') {
            const adminLink = document.querySelector('#admin-link');
            adminLink.style.display = 'block';
        }
    }
});

function isLoggedIn() {
    return localStorage.getItem('sessionToken') !== null;
}


