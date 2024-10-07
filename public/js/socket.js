// conectar el front
const socket = io();

const btnFilter = document.querySelector('#btnFilter');

btnFilter.addEventListener("click", () => {
    const category = document.querySelector("#selectFilter")

    socket.emit("products filter", category.value);
    
    // Resetear la selección del filtro
    category.selectedIndex = 0;
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
                    </div>
                </div>
            </div>
        </div>`
    )
    .join("");
    document.querySelector("#productsList").innerHTML = contenido;
});                        
//<a href="/products/${each.id}" class="btn btn-primary m-2">Ver detalle</a>
