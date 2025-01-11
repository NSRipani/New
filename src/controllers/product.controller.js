import { prodService } from '../service/products.service.js';
import Controllers from './controller.js';

class ProductController extends Controllers {
    constructor() {
        super(prodService)
    }
    async create(req, res, next) {
        try {
            const data = req.body;
            const response = await prodService.create(data);
            console.log(response)
            return res.status(201).json({
                message: "PRODUCT CREATED",
                response: response,
            });
        } catch (error) {
            return next(error);
        }
    }

    async readAll(req, res, next) {
        try {
            // const filter = req.query;
            const response = await prodService.readAllProducts();
            if (response.length > 0) {
                return res.status(200).json({
                    message: "PRODUCTS READ",
                    response
                });
            } else {
                const error = new Error("PRODUCTS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }

    async paginate(req, res, next) {
        const { page = 1, limit = 10 } = req.query;
        try {
            const options = {
                page: parseInt(page),
                limit: parseInt(limit),
                // lean: true, // Importante para Handlebars
            };
            const response = await this.paginate({}, options);
            if (response.docs.length > 0) {
                return res.status(200).json({
                    message: "PRODUCTS READ",
                    docs: response.docs,
                    limit: response.limit,
                    page: response.page,
                    hasPrevPage: response.hasPrevPage,
                    hasNextPage: response.hasNextPage,
                    prevPage: response.prevPage,
                    nextPage: response.nextPage,
                });
            } else {
                const error = new Error("PRODUCTS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }

    async readIdProduct(req, res, next) {
        try {
            const { id } = req.params;
            const response = await prodService.readProductId(id);
            if (response) {
                return res.status(200).json({ message: "PRODUCT READ", response });
            } else {
                const error = new Error("PRODUCT NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }
    async readCategory(req, res, next) {
        try {
            const category = req.query;
            const response = await prodService.findByCategory(category) //findByCategory(category);
            console.log(response)
            if (response) {
                return res.status(200).json({ message: "PRODUCTS READ", response });
            } else {
                const error = new Error("PRODUCTS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            const response = await prodService.update(id, data);
            if (response) {
                return res.status(200).json({ message: "PRODUCT UPDATED", response });
            } else {
                const error = new Error("PRODUCT NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const response = await prodService.delete(id);
            if (response) {
                return res.status(200).json({ message: "PRODUCT DELETED", response });
            } else {
                const error = new Error("PRODUCT NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }
}

const productController = new ProductController();
export default productController;