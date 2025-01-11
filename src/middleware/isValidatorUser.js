import Joi from "joi";

const registerSchema = Joi.object({
    first_name: Joi.string().pattern(/^[a-zA-Z\s]+$/).required().messages({
        'string.base': 'El título solo puede contener letras.'
    }),
    last_name: Joi.string().pattern(/^[a-zA-Z]+$/).required().messages({
        'string.base': 'El título solo puede contener letras.'
    }),
    email: Joi.string().email(),
    age: Joi.number().messages({
        'number.base': 'La edad solo puede contener solo números.'
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9\s]{8,}$/).messages({
        'string.base': 'El título debe ser un texto y/o números.',
    }),
    role: Joi.string().pattern(/^[a-zA-Z\s]+$/).required().messages({
        'string.base': 'El título debe ser un texto.',
        'any.only': 'El usuario es "user" o "admin"', 
    })
});

export const userValidator = (req, res, next) => {
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    error ? res.status(400).send(error) : next();
};
// function isValidatorUser (req, res, next){
//     try {
//         let { first_name, last_name, email, age, password} = req.body;
//         if (!first_name || !last_name || !email || !age || !password){
//             const error = new Error("Error: The email, password are required (Middleware)");
//             error.statusCode = 404;
//             throw error;
//         }
//         next()
//     } catch (error) {
//         return next(error)
//     }
// }

// export default isValidatorUser
