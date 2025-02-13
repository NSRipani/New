
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

## DevDependencies:
- nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios en el código.

## Uso
Uso del servidor con nodemon permite que el servidor se reinicie automáticamente cada vez que realices cambios en el código.

## Uso de socket

El uso de socket fue en el filtardo de productos.

## Vistas

vista pricipal tiene un navbar que contine la imagen del proyecto, un enlace de 'home' y tres enlaces mas a la derecha para registrar usuario, de login y carrito. Con el footer.

la manera de mostrar las vistas es de manera directe presionando los enlace del navbar y ademas son redireccionadas entre si. 

Las vistas de registro y de login no tienen funcionalidad.

Luego de que se loguee pueda ver el panel de adminitrador. y tambien para el mismo usuario la vista de gestionar tanto para usuarios y productos.

#### - Panel de usuarios ####
```http
http://localhost:8000/products/admin
```

Por otro lado, se creo la vista para usuario adminitrador y productos
#### - Gestion de usuarios ####
```http
http://localhost:8000/users/paneladmin
```
#### - Gestion de productos ####
```http
http://localhost:8000/users/paneladmin
```

## Entrega final mediante  POSTMAN

La entrega la realizaré con rutas realizas en Postman.

## API Reference

#### METODOS DE PRODUCTOS
#### GET all PRODUCTS

```http
  GET localhost:8000/api/products
```
#### GET all PRODUCTS - PAGINATE

```http
  GET localhost:8000/api/products/paginate
```

#### GET por ':id'

```http
  GET http://localhost:8000/api/products/:id
```
#### GET por 'category'

```http
  GET http://localhost:8000/api/products?category=Abrigos
```
#### POST 

```http
  POST http://localhost:8000/api/products
```
#### PUT por ':id'

```http
  PUT http://localhost:8000/api/products/:id
```
#### DELETE por ':id'

```http
  DELETE http://localhost:8000/api/products/:id
```

#### METODOS DE USUARIOS
#### GET all USERS

```http
  GET http://localhost:8000/api/users/register
```
#### GET por ':id'

```http
  GET http://localhost:8000/api/users/:id
```
#### GET por 'role'

```http
  GET http://localhost:8000/api/users?role=user
```
#### PUT por ':id'

```http
  PUT http://localhost:8000/api/users/:id
```

#### DELETE por ':id'

```http
  DELETE http://localhost:8000/api/users/:id
```
#### POST por LOGIN

```http
  POST http://localhost:8000/api/users/session
```
#### METODOS DE TOKEN
```http
http://localhost:8000/api/users/current
```

```http
http://localhost:8000/api/users/current-admin
```

#### METODOS DEL CARRITO
#### GET all CARTS

```http
  GET localhost:8000/api/carts
```
#### GET por ':id'

```http
  GET http://localhost:8000/api/carts/:id
```

#### POST 

```http
  POST http://localhost:8000/api/carts
```
#### PUT por ':id'

```http
  PUT http://localhost:8000/api/carts/:id
```
#### DELETE por ':id'

```http
  DELETE http://localhost:8000/api/carts/:id
```
# Estrategia de login

Se utilizo para login la que nos proporciona PASSPORT. En este caso se utilizo la estrategia de ` passport-jwt `.