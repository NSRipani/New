function isValidatorUser (req, res, next){
    try {
        let { email, password, role } = req.body;
        if (!email || !password || !role){
            const error = new Error("Error: The email, password and role are required");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}

export default isValidatorUser
