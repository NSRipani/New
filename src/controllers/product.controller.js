import productsManager from "../data/products.manager.js";
class ProductsManager{
  constructor() {}

  index(requirement, response) {
    try {
      return response.status(200).json({
        message: "CODER COMMERCE API",
      });
    } catch (error) {
      return next(error)
    }
  }
    
  // usar 'params'
  async getAllProducts(req, res, next) {
    try {
      const { category } = req.query;
      const data = await productsManager.read(category);
      if (data.length > 0) {
        return res.status(200).json({ 
          message: "READ PRODUCTS", 
          products: data
        });
      } else {
        const error = new Error("NOT FOUND PRODUCTS");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error)
    }
  }
  
  // usar 'params'
  async getProduct(req, res, next) {
    // res es el objeto de respuesta a enviar al cliente
    try {
      const { id } = req.params;
      const prodID = await productsManager.readOne(id);
      // response es la respuesta que se espera del manager (para leer un producto)
      if (!prodID) {
        const error = new Error(`Not found product with ID: ${id}`);
        error.statusCode = 404;
        throw error;
      }
      return res.status(200).json({ 
        message: "PRODUCT READ", 
        product: prodID 
      });
      
    } catch (error) {
      return next(error)
    }
  }
  
  // usar 'body'
  async create(req, res, next) {
    try {
      const { title, category, price, stock } = req.body;
      const data = {
        title,
        photo: 'ruta/por/defecto.jpg',
        category,
        price: price || 1,
        stock: stock || 1
      }
      const prod = await productsManager.create(data);
      return res.status(201).json({ 
        message: "PRODUCT CREATED", 
        id: prod
      });
    } catch (error) {
      return next(error)
    }
  }

  // Actualizar un producto
  async updateProduct(req, res, next) {
    try {
      const { id } = req.params; 
      const newData = req.body; 
      const updateProd = await productsManager.update(id, newData); 
      if (!updateProd){
        const error = new Error(`Product not found with id: ${req.params.id}`);
        error.statusCode = 404;
        throw error;
      };
      return res.status(200).json({ 
        message: "Product updated", 
        product: updateProd
      });
    } catch (error) {
      return next(error)
    }
  }
  
  // Eliminar un producto
  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params; 
      const dataProd = await productsManager.destroy(id); 
      if (!dataProd){
        const error = new Error("Product not removed");
        error.statusCode = 404;
        throw error;
      }
      return res.status(200).json({  
        message: "Product deleted successfully"
      }); 
    } catch (error) {
      return next(error)
    }
  }
}

const prodController = new ProductsManager()
export default prodController