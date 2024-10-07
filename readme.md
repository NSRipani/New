
# Proyecto de Backend de E-commerce
## Descripción del Proyecto
Este es el backend de una plataforma de ecommerce, diseñado para manejar la lógica de negocio, la gestión de datos y la comunicación con el frontend. Utiliza Node.js y Express para crear una API RESTful que permite interactuar con los productos y gestionar usuarios.

## Dependencias
Las siguientes dependencias fueron utilizadas en el backend:
- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework web para crear APIs.
- nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios en el código.
- http: Módulo para realizar solicitudes HTTP (puede ser un riesgo de seguridad, usar con precaución).
- morgan: Middleware para registrar solicitudes HTTP en la consola.
- multer: Middleware para manejar la carga de archivos.
- cros: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## DevDependencies:
- nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios en el código.

## Rutas Utilizadas
- GET /api/products: Obtiene la lista de productos.
- GET /api/products/:id: Obtiene un producto específico por su ID.
- POST /api/products: Crea un nuevo producto.
- PUT /api/products/:id: Actualiza un producto existente.
- DELETE /api/products/:id: Elimina un producto.

## API de Usuarios
- GET /api/users: Obtiene la lista de productos.
- GET /api/users/:id: Obtiene la información de un usuario específico por su ID.
- PUT /api/users/:id: Actualiza la información de un usuario existente.
- DELETE /api/users/:id: Elimina un usuario.

## Uso
Uso del servidor con nodemon permite que el servidor se reinicie automáticamente cada vez que realices cambios en el código.

# Middleware
Validación de Entradas
Para garantizar que las entradas de los usuarios sean válidas, se pueden utilizar middleware de validación. 

# Manejo de Errores
Es importante manejar errores de manera efectiva. Puedes crear un middleware de manejo de errores que capture cualquier error que ocurra en las rutas y devuelva una respuesta adecuada.

## Preentrega n° 2
- Se agrego imágenes en la carpeta /public/assests
- Se agrego una carpeta /public/js/socket.js para manejar las emiciones del backend y enviar mensajes al front, las el filtado de productos 
- En /controllers, se agragaron aluna funciones asincronicas para renderizar plantrillas y realizar lecturas de pructos como de usuarios.
- En carpeta /route/views se usaron rutas para manejar metos GET para crear rutas de vistas de usuario y de productos.
- En carpeta /route existe un index.soket.js para manejar las recepciones del front y emitir hancia el front.
- En carpeta /views existen 'handlebars' (plantillas) que se rendecizarán, traducen en codigo html para que se crea un front. En cada una de ellas, tiene sus correspondiente funcionalidades.
- En carpeta /views/latouts esta el 'handlebars' que se rendecizará en tomo momento que se utilice otros 'handlebars'

- El unico uso de socket fue en el filtardo de productos.

- Las vistas creería que estan realizadas segun la consigna.
