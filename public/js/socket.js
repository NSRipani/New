// conectar el front
const socket = io();

// Selecciona el formulario
document.querySelector('#register').addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores de los campos
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const role = document.querySelector('#role').value;
    const photo = document.querySelector('#profilePic').value;
    
    // Crear un objeto con los datos del usuario
    const dataUser = { email, password, role, photo } 

    socket.emit("new user", dataUser)
});

socket.on("update user", data => {
    document.querySelector("#update").innerHTML = `
    <h1 class="text-center m-4">Detalles del Usuario</h1>
    <div class="container shadow p-4 rounded">
        <div class="row bg-light p-3 rounded">
            <div class="col-md-4 d-flex justify-content-center">
                <img src="${data.photo}" alt="Foto de ${data.email}" class="img-fluid rounded-circle" style="width: 200px; height: 200px;">
            </div>
            <div class="col-md-8">
                <p><strong>Correo electrónico: </strong>${data.email}</p>
                <p><strong>Rol: </strong>${data.role}</p>
                <p><strong>ID Usuario: </strong>${data.id}</p>
                <p class="d-flex align-items-center m-auto">
                    <strong>Contraseña: </strong>
                    <input type="password" value="${data.password}" readonly class="form-control-plaintext ms-2" style="border: none; background: transparent;">
                </p>
            </div>
        </div>
        <hr class="my-4">
        <div class="text-center m-4">
            <a href="/users" class="btn btn-primary btn-lg">Volver a la lista de usuarios</a>
        </div>
    </div>`
});