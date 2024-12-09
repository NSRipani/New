const socket = io(); 

const btnLogout = document.querySelector('#btn-logout');

btnLogout.addEventListener("click", (event) => {
    event.preventDefault(); 

    socket.emit('logout');

    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userRole');

    removeAdminLink();

    Toastify({
        text: "Has cerrado sesión exitosamente",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5722",
    }).showToast();

    const navItem = document.querySelector('#nav-item a');
    navItem.textContent = 'Offline'; // Cambia el texto según sea necesario
    
    window.location.href = "/users/login";
});

function removeAdminLink() {
    const adminLink = document.querySelector('#admin-link');
    if (adminLink) {
        adminLink.remove();
    }
}
