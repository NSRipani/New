const socket = io();

document.getElementById('#formLogin').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('#email').value;
    const password = document.getElementById('#password').value;

    // Emitir evento de inicio de sesión
    socket.emit('login', { email, password });
});

socket.on('loginSuccess', () => {
    document.getElementById('status').style.display = 'block';
    document.getElementById('online-status').innerText = 'online';
    // Redirigir a otra vista
    window.location.href = '/products/admin'; // Cambia esto a la ruta deseada
});

socket.on('loginError', (error) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error,
    });
});

document.getElementById('"btn-logout').addEventListener('click', function() {
    socket.emit('logout');
    window.location.href = '/home'; // Redirigir a la página de inicio
});

socket.on('logoutSuccess', () => {
    document.getElementById('status').style.display = 'none';
    document.getElementById('online-status').innerText = 'offline';
});
