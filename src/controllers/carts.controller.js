import cartMongoManager from "../data/mongo/manager/cart.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body
        const response = await cartMongoManager.create(data)
        return res.status(201).json({
            message: "CART CREATED",
            response: response._id
        })
    } catch (error) {
        return next(error)
    }
}
const readAll = async (req, res, next) => {
    try {
        const filter = req.query
        const response = await cartMongoManager.readAll(filter)
        if (response.length > 0) {
            return res.status(200).json({ message: "CARTS READ", response });
        } else {
            const error = new Error("CARTS NOT FOUND");
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
        const response = await cartMongoManager.read(id);
        if (response) {
            return res.status(200).json({ message: "CART READ", response });
        } else {
            const error = new Error("CART NOT FOUND");
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
        const response = await cartMongoManager.update(id, data);
        if (response) {
            return res
                .status(200)
                .json({ message: "CART UPDATE", response });
        } else {
            const error = new Error("CART NOT FOUND");
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
        const response = await cartMongoManager.destroy(id);
        if (response) {
            return res
                .status(200)
                .json({ message: "CART DELETED", response });
        } else {
            const error = new Error("CART NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}

export  {create, read, readAll, update, destroy}