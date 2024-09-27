function isValidatorUser (req, res, next){
    try {
        let { email, password } = req.body;
        if (!email || !password ){
            const error = new Error("Error: The email and password are required");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}

export default isValidatorUser
