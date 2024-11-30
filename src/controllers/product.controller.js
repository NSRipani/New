import {prodService} from '../service/products.service.js'

class ProductController {
    async create(req, res, next) {
        try {
            const data = req.body;
            const response = await prodService.create(data);
            return res.status(201).json({
                message: "PRODUCT CREATED",
                response: response._id,
            });
        } catch (error) {
            return next(error);
        }
    }

    async readAll(req, res, next) {
        try {
            const filter = req.query;
            const response = await prodService.readAll(filter);
            if (response.length > 0) {
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

    async paginate(req, res, next) {
        const { page = 1, limit = 10 } = req.query;
        try {
            const options = {
                page: parseInt(page),
                limit: parseInt(limit),
                lean: true, // Importante para Handlebars
            };
            const response = await prodService.paginate({}, options);
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

    async read(req, res, next) {
        try {
            const { id } = req.params;
            const response = await prodService.read(id);
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

    async destroy(req, res, next) {
        try {
            const { id } = req.params;
            const response = await prodService.destroy(id);
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

    async showProducts(req, res, next) {
        try {
            const { category } = req.query;
            const data = await prodService.readAll({ category });
            if (data.length > 0) {
                return res.render("home", { product: data });
            } else {
                const error = new Error("PRODUCTS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error);
        }
    }

    async prodAdmin(req, res, next) {
        try {
            return res.render("panelproducts");
        } catch (error) {
            return next(error);
        }
    }
}

const productController = new ProductController();
export default productController;

// import productsDao from "../data/mongo/dao/dao.product.js";

// const create = async (req, res, next) => {
//     try {
//         const data = req.body
//         const response = await productsDao.create(data)
//         return res.status(201).json({
//             message: "PRODUCTS CREATED",
//             response: response._id
//         })
//     } catch (error) {
//         return next(error)
//     }
// }
// const readAll = async (req, res, next) => {
//     try {
//         const filter = req.query
//         const response = await productsDao.readAll(filter)
//         if (response.length > 0) {
//             return res.status(200).json({ message: "PRODUCTS READ", response });
//         } else {
//             const error = new Error("PRODUCTS NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }
// const paginate = async (req, res, next) => {
//     const { page = 1 , limit = 10 } = req.query;
//     try {
//         // const filter = req.query
//         const options = {
//             page: parseInt(page),
//             limit: parseInt(limit),
//             lean: true, // Importante para Handlebars
//         };
//         const response = await productsDao.paginate({}, { options })
//         if (response.docs.length > 0) {
//             return res.status(200).json({
//                 message: "PRODUCTS READ",
//                 docs: response.docs,
//                 limit: response.limit,
//                 page: response.page,
//                 hasPrevPage: response.hasPrevPage,
//                 hasNextPage: response.hasNextPage,
//                 prevPage: response.prevPage,
//                 nextPage: response.nextPage
//             });
//         } else {
//             const error = new Error("PRODUCTS NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }

// const read = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const response = await productsDao.read(id);
//         if (response) {
//             return res.status(200).json({ message: "PRODUCTS READ", response });
//         } else {
//             const error = new Error("PRODUCTS NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }
// const update = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const data = req.body;
//         const response = await productsDao.update(id, data);
//         if (response) {
//             return res
//                 .status(200)
//                 .json({ message: "PRODUCTS UPDATE", response });
//         } else {
//             const error = new Error("PRODUCTS NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }
// const destroy = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const response = await productsDao.destroy(id);
//         if (response) {
//             return res
//                 .status(200)
//                 .json({ message: "PRODUCTS DELETED", response });
//         } else {
//             const error = new Error("PRODUCTS NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }

// const showProducts = async (req, res, next) => {
//     try {
//     const { category } = req.query;
//     // const data = await productsMongoManager.read(category);
//     const data = await productsDao.readAll(category);
//     if (data.length > 0) {
//         return res.render("home", {product: data});
//     } else {
//         const error = new Error("NOT FOUND PRODUCTS");
//         error.statusCode = 404;
//         throw error;
//     }
//     } catch (error) {
//     next(error)
//     }
// }
// const prodAdmin = async (req, res, next) => {
//     try {
//         return res.render('panelproducts');
//     } catch (error) {
//         return next(error)
//     }
// }
// export  {create, read, readAll, update, destroy,prodAdmin, showProducts,paginate}

