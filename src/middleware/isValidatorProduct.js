import Joi from 'joi';

// Definir el esquema de validación para productos
const productSchema = Joi.object({
    title: Joi.string().required().pattern(/^[a-zA-Z\s]+$/)
        .messages({
            'string.base': 'El título debe ser un texto.'
        }),
    category: Joi.string()
        .valid('Abrigos', 'Articulo', 'Zapatos', 'Zapatillas').pattern(/^[a-zA-Z\s]+$/).required()
        .messages({
            'string.base': 'La categoría debe ser un texto.'
        }),
    
    price: Joi.number().integer().required()
        .messages({
            'number.base': 'El precio debe ser un número.'
        }),
    
    stock: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'El stock debe ser un número entero.'
        })
});

export const isValidatorProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    error ? res.status(400).send(error) : next();
};
// function isValidatorProduct (req, res, next){
//     try {
//         let { title, category, price, stock } = req.body;
//         if (!title || !category || !price || !stock){
//             const error = new Error("The product must contain all its values");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         return next(error)
//     }
// }

// export default isValidatorProduct
