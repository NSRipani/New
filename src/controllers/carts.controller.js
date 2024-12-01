// import cartsDao from "../data/mongo/dao/dao.carts.js";

// const create = async (req, res, next) => {
//     try {
//         const data = req.body
//         const response = await cartsDao.create(data)
//         return res.status(201).json({
//             message: "CART CREATED",
//             response: response._id
//         })
//     } catch (error) {
//         return next(error)
//     }
// }
// const readAll = async (req, res, next) => {
//     try {
//         const filter = req.query
//         const response = await cartsDao.readAll(filter)
//         if (response.length > 0) {
//             return res.status(200).json({ message: "CARTS READ", response });
//         } else {
//             const error = new Error("CARTS NOT FOUND");
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
//         const response = await cartsDao.read(id);
//         if (response) {
//             return res.status(200).json({ message: "CART READ", response });
//         } else {
//             const error = new Error("CART NOT FOUND");
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
//         const response = await cartsDao.update(id, data);
//         if (response) {
//             return res
//                 .status(200)
//                 .json({ message: "CART UPDATE", response });
//         } else {
//             const error = new Error("CART NOT FOUND");
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
//         const response = await cartsDao.destroy(id);
//         if (response) {
//             return res
//                 .status(200)
//                 .json({ message: "CART DELETED", response });
//         } else {
//             const error = new Error("CART NOT FOUND");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }

// const cart = (req, res, next) => {
//     try {
//         return res.render('cart');
//     } catch (error) {
//         return next(error)
//     }
// }

// export  {create, read, readAll, update, destroy, cart}