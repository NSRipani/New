// conectar el front
const socket = io();

// // Selecciona el formulario
// document.querySelector('#register').addEventListener('submit', (event) => {
//     event.preventDefault(); // Previene el envío del formulario por defecto

//     // Obtiene los valores de los campos
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     const role = document.querySelector('#role').value;
//     const photo = document.querySelector('#profilePic').value;
    
//     // Crear un objeto con los datos del usuario
//     const dataUser = { email, password, role, photo } 

//     socket.emit("new user", dataUser)
// });
// // Escuchar la respuesta del servidor para saber si fue exitoso o no
// socket.on("user registered", (response) => {
//     if (response.status === "success") {
//         // Mostrar notificación de éxito
//         Toastify({
//             text: "User registered successfully!",
//             duration: 3000,
//             close: true,
//             gravity: "top", 
//             position: "center", 
//             backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
//         }).showToast();

//         // Redirigir al usuario a la página de inicio de sesión o de bienvenida
//         setTimeout(() => {
//             window.location.href = "/login"; // Cambia la URL según tu ruta de inicio de sesión
//         }, 2000);
//     } else {
//         // Mostrar notificación de error
//         Toastify({
//             text: `Error: ${response.message}`,
//             duration: 3000,
//             close: true,
//             gravity: "top", 
//             position: "center", 
//             backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)"
//         }).showToast();
//     }
// });

// socket.on("update user", dataUser => {
//     document.querySelector("#update").innerHTML = ``
// });

// buscar productos primera vez
//socket.emit("products filter", '');

const btnFilter = document.querySelector('#btnFilter');

btnFilter.addEventListener("click", (event) => {
    const category = document.querySelector("#selectFilter")

    socket.emit("products filter", category.value);
});

socket.on("producs filtered", (data) => {

    const contenido = data
    .map((each) =>
        `<div id="filterProducts" class="col-md-3 mb-4">
            <div class="card border-dark shadow-sm" style="background-color: #e7f1ff;">
                <img src="${each.photo}" class="card-img-top" alt="${each.title}" style="max-height: 200px; object-fit: cover;">
                <div class="card-body"> 
                    <h5 class="card-title">${each.title}</h5>
                    <p class="card-text text-muted">${each.category}</p>
                    <p class="card-text mb-0"><strong>Precio: $ ${each.price}</strong></p>
                    <p class="card-text"><strong>Sstock: ${each.stock} u.</strong></p>
                    <div class="d-flex justify-content-center flex-wrap">
                        <a href="/cart/${each.id}" class="btn btn-success m-2">Agregar al carrito</a>
                        <a href="/products/${each.id}" class="btn btn-primary m-2">Ver detalle</a>
                    </div>
                </div>
            </div>
        </div>`
    )
    
    document.querySelector("#productsList").innerHTML = contenido;
});