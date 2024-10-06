const socket = io();

document.querySelector("#filterProducts").addEventListener("change", () => {
    const selectedCategory = document.querySelector("#filterProducts").value;
    socket.emit("search products", selectedCategory);
});

socket.on("products filtered", (products) => {
    const productList = products.map(product => `
        <div class="col-md-3 mb-4">
            <div class="card border-dark shadow-sm" style="background-color: #e7f1ff;">
                <img src=${product.photo} class="card-img-top" alt=${product.title} style="max-height: 200px; object-fit: cover;">
                <div class="card-body"> 
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text text-muted">${product.category}</p>
                    <p class="card-text mb-0"><strong>Precio: $ ${product.price}</strong></p>
                    <p class="card-text"><strong>Sstock: ${product.stock} u.</strong></p>
                    <div class="d-flex justify-content-center flex-wrap">
                        <a href="/cart/${product.id}" class="btn btn-success m-2">Agregar al carrito</a>
                        <a href="/products/${product.id}" class="btn btn-primary m-2">Ver detalle</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
    document.querySelector("div").innerHTML = productList; // Actualizar el contenido de la sección de productos
});