function isValidatorUser (req, res, next){
    try {
        let { first_name, last_name, email, age, password} = req.body;
        if (!first_name || !last_name || !email || !age || !password){
            const error = new Error("Error: The email, password are required (Middleware)");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}

export default isValidatorUser
