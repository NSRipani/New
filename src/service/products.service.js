import Services from "./serverServices.js";
import { prodDao } from '../dao/mongo/dao.product.js'

class ProductService extends Services {
    constructor(){
        super(prodDao);
    }
    // Crear un nuevo producto
    create = async (data) => {
        try {
            const product = await prodDao.create(data);
            return product;
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    };

    // Leer todos los productos
    readAllProducts = async () => {
        try {
            return await prodDao.readAll();
        } catch (error) {
            throw new Error(`Error reading products: ${error.message}`);
        }
    };
    // Leer por ID
    readProductId = async (id) => {
        try {
            return await prodDao.readID(id)
        } catch (error) {
            throw new Error(`Error reading products: ${error.message}`);
        }
    };

    // Leer por categoria
    findByCategory = async (category) => {
        try {
            const response = await prodDao.findByCategory(category);
            if (!response || response.length === 0) throw new Error(`No results for category: ${category}`);
        } catch (error) {
            throw error;//(`Error finding products by category: ${error.message}`);
        }
    };

    // Actualizar un producto existente
    update = async (id, productData) => {
        try {
            const opts = { new: true };
            const updatedProduct = await this.dao.update(id, productData,opts);
            return updatedProduct;
        } catch (error) {
            throw new Error(`Error updating product: ${error.message}`);
        }
    };

    // Eliminar un producto
    // delete = async (id) => {
    //     try {
    //         const result = await this.delete(id);
    //         return result;
    //     } catch (error) {
    //         throw new Error(`Error deleting product: ${error.message}`);
    //     }
    // };

}

export const prodService = new ProductService();

