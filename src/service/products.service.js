import Services from "./serverServices.js";
import { prodDao } from '../dao/mongo/dao.product.js'

class ProductService extends Services {
    constructor(){
        super(prodDao);
    }

    // Leer todos los productos
    readAllProducts = async () => {
        try {
            return await this.dao.readAll();
        } catch (error) {
            throw new Error(`Error reading products: ${error.message}`);
        }
    };

    // Crear un nuevo producto
    createProduct = async (productData) => {
        try {
            const newProduct = await this.dao.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    };

    // Actualizar un producto existente
    updateProduct = async (productId, productData) => {
        try {
            const updatedProduct = await this.dao.update(productId, productData);
            return updatedProduct;
        } catch (error) {
            throw new Error(`Error updating product: ${error.message}`);
        }
    };

    // Eliminar un producto
    deleteProduct = async (productId) => {
        try {
            const result = await this.dao.delete(productId);
            return result;
        } catch (error) {
            throw new Error(`Error deleting product: ${error.message}`);
        }
    };

    findByCategory = async (category) => {
        try {
            return await this.dao.readAll({ category });
        } catch (error) {
            throw new Error(`Error finding products by category: ${error.message}`);
        }
    };
}

export const prodService = new ProductService();