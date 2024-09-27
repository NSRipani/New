function isValidatorProduct (req, res, next){
    try {
        let { title, category, price, stock } = req.body;
        if (!title || !category || !price || !stock){
            const error = new Error("The product must contain all its values");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}

export default isValidatorProduct
