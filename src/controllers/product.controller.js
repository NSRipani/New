import productsMongoManager from "../data/mongo/manager/products.manager.js";
// import productsManager from './../data/fs/products.manager.js';

const create = async (req, res, next) => {
    try {
        const data = req.body
        const response = await productsMongoManager.create(data)
        return res.status(201).json({
            message: "PRODUCTS CREATED",
            response: response._id
        })
    } catch (error) {
        return next(error)
    }
}
const readAll = async (req, res, next) => {
    try {
        const filter = req.query
        const response = await productsMongoManager.readAll(filter)
        if (response.length > 0) {
            return res.status(200).json({ message: "PRODUCTS READ", response });
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const paginate = async (req, res, next) => {
    try {
    // const filter = req.query
        const { page, limit } = req.query
        const response = await productsMongoManager.paginate({}, { page, limit })
    // paginate acepta dos argumentos
    // el primero es para el filtro
    // y el segundo es para la paginacion
    // console.log(response);    
        if (response.docs.length > 0) {
            return res.status(200).json({
                message: "PRODUCTS READ",
                response: response.docs,
                prevPage: response.prevPage,
                hasPrevPage: response.hasPrevPage,
                nextPage: response.nextPage,
                hasNextPage: response.hasNextPage
            });
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const read = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await productsMongoManager.read(id);
        if (response) {
            return res.status(200).json({ message: "PRODUCTS READ", response });
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = await productsMongoManager.update(id, data);
        if (response) {
            return res
                .status(200)
                .json({ message: "PRODUCTS UPDATE", response });
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await productsMongoManager.destroy(id);
        if (response) {
            return res
                .status(200)
                .json({ message: "PRODUCTS DELETED", response });
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}

const showProducts = async (req, res, next) => {
    try {
    const { category } = req.query;
    // const data = await productsMongoManager.read(category);
    const data = await productsMongoManager.read(category);
    if (data.length > 0) {
        return res.render("home", {product: data});
    } else {
        const error = new Error("NOT FOUND PRODUCTS");
        error.statusCode = 404;
        throw error;
    }
    } catch (error) {
    next(error)
    }
}
// const detailProduct = async (req, res, next) => {
//     // res es el objeto de respuesta a enviar al cliente
//     try {
//     const { id } = req.params;
//     const prodID = await productsMongoManager.read(id);
//     // response es la respuesta que se espera del manager (para leer un producto)
//     if (prodID) {
//         return res.render("productsDetail", { prod: prodID});     
//     } else {
//         const error = new Error(`Not found product with ID: ${id}`);
//         error.statusCode = 404;
//         throw error;
//     }
//     } catch (error) {
//     return next(error)
//     }
// }

export  {create, read, readAll, update, destroy, showProducts, paginate}

// class ProductsManager{
//   constructor() {}

//   index(requirement, response) {
//     try {
//       return response.status(200).json({
//         message: "CODER COMMERCE API",
//       });
//     } catch (error) {
//       return next(error)
//     }
//   }
    
//   // usar 'params'
//   async getAllProducts(req, res, next) {
//     try {
//       const { category } = req.query;
//       // const data = await productsMongoManager.read(category);
//       const data = await productsManager.read(category);
//       if (data.length > 0) {
//         return res.status(200).json({ 
//           message: "READ PRODUCTS", 
//           products: data
//         });
//       } else {
//         const error = new Error("NOT FOUND PRODUCTS");
//         error.statusCode = 404;
//         throw error;
//       }
//     } catch (error) {
//       return next(error)
//     }
//   }
  
//   // usar 'params'
//   async getProduct(req, res, next) {
//     // res es el objeto de respuesta a enviar al cliente
//     try {
//       const { id } = req.params;
//       const prodID = await productsMongoManager.readOne(id);
//       // response es la respuesta que se espera del manager (para leer un producto)
//       if (!prodID) {
//         const error = new Error(`Not found product with ID: ${id}`);
//         error.statusCode = 404;
//         throw error;
//       }
//       return res.status(200).json({ 
//         message: "PRODUCT READ", 
//         product: prodID 
//       });
      
//     } catch (error) {
//       return next(error)
//     }
//   }
  
//   // usar 'body'
//   async create(req, res, next) {
//     try {
//       const data = req.body;
//       // const data = {
//       //   title,
//       //   photo: 'ruta/por/defecto.jpg',
//       //   category,
//       //   price: price || 1,
//       //   stock: stock || 1
//       // }
//       const prod = await productsMongoManager.create(data);
//       return res.status(201).json({ 
//         message: "PRODUCT CREATED", 
//         id: prod
//       });
//     } catch (error) {
//       return next(error)
//     }
//   }

//   // Actualizar un producto
//   async updateProduct(req, res, next) {
//     try {
//       const { id } = req.params; 
//       const newData = req.body; 
//       const updateProd = await productsMongoManager.update(id, newData); 
//       if (!updateProd){
//         const error = new Error(`Product not found with id: ${req.params.id}`);
//         error.statusCode = 404;
//         throw error;
//       };
//       return res.status(200).json({ 
//         message: "Product updated", 
//         product: updateProd
//       });
//     } catch (error) {
//       return next(error)
//     }
//   }
  
//   // Eliminar un producto
//   async deleteProduct(req, res, next) {
//     try {
//       const { id } = req.params; 
//       const dataProd = await productsMongoManager.destroy(id); 
//       if (!dataProd){
//         const error = new Error("Product not removed");
//         error.statusCode = 404;
//         throw error;
//       }
//       return res.status(200).json({  
//         message: "Product deleted successfully"
//       }); 
//     } catch (error) {
//       return next(error)
//     }
//   }

//   async showProducts(req, res, next){
//     try {
//       const { category } = req.query;
//       // const data = await productsMongoManager.read(category);
//       const data = await productsManager.read(category);
//       if (data.length > 0) {
//         return res.render("home", {product: data});
//       } else {
//         const error = new Error("NOT FOUND PRODUCTS");
//         error.statusCode = 404;
//         throw error;
//       }
//     } catch (error) {
//       next(error)
//     }
//   }

//   async detailProduct(req, res, next) {
//     // res es el objeto de respuesta a enviar al cliente
//     try {
//       const { id } = req.params;
//       const prodID = await productsManager.readOne(id);
//       // response es la respuesta que se espera del manager (para leer un producto)
//       if (prodID) {
//         return res.render("productsDetail", { prod: prodID});     
//       } else {
//         const error = new Error(`Not found product with ID: ${id}`);
//         error.statusCode = 404;
//         throw error;
//       }
//     } catch (error) {
//       return next(error)
//     }
//   }
  
//   async productsAdmin (req, res, next){
//     try {
//       return res.render('panelproducts');
//     } catch (error) {
//       return next(error)
//     }
//   }
// }

// const prodController = new Controller(productsMongoManager, "PRODUCTS")
// const {create, read, readAll, update, destroy} = prodController
// export  {create, read, readAll, update, destroy}
