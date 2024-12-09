import Controllers from './controller.js';
import { userService } from './../service/user.service.js';

class UserController extends Controllers {
    constructor(){
        super(userService)
    }

    // agregar funciones 'login', 'regitrer' y 'private'
    privateData = (req, res, next) => {
        try {
            if (!req.user)
                throw new Error("No se puede acceder a los datos del usuario");
            res.json({
                user: req.user,
            });
        } catch (error) {
            next(error);
        }
    };

    login = async (req, res, next) => {
        try {
            const token = await userService.login(req.body);
            res
                .cookie('token', token, { httpOnly: true })
                .json({ message: 'Login OK', token });
        } catch (error) {
            next(error);
        }
    };

    // Crear usuario = register
    create = async (req, res, next) => {
        try {
            const data = req.body
            const response = await userService.registerUser(data)
            return res.status(201).json({
                message: "USERS CREATED",
                response: response
            })
        } catch (error) {
            return next(error)
        }
    }
    
    // Leer todos los usuarios
    readAll = async (req, res, next) => {
        try {
            // const filter = req.query
            const response = await userService.getAllUsers()//this.service.getAll()
            if (response) {//.length > 0
                return res.status(200).json({ message: "USERS READ", response });
            } else {
                const error = new Error("USERS NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }

    // Leer por ID
    read = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await userService.getById(id);
            if (response) {
                return res.status(200).json({ message: "USER READ", response });
            } else {
                const error = new Error("USER NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }

    // Actualizar por ID
    update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const response = await userService.update(id, data);
            if (response) {
                return res
                    .status(200)
                    .json({ message: "USER UPDATE", response });
            } else {
                const error = new Error("USER NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }

    // Eliminar por ID
    destroy = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await userService.delete(id);
            if (response) {
                return res
                    .status(200)
                    .json({ message: "USER DELETED", response });
                } else {
                    const error = new Error("USER NOT FOUND");
                    error.statusCode = 404;
                    throw error;
                }
        } catch (error) {
            return next(error)
        }
    }
    registerView = (req, res, next) => {
        try {
            return res.render('userRegister');
        } catch (error) {
            return next(error)
        }
    }
    loginView = (req, res, next) => {
        try {
            return res.render('login');
        } catch (error) {
            return next(error)
        }
    }
    
    admin = (req, res, next) => {
        try {
            return res.render('panelAdmin');
        } catch (error) {
            return next(error)
        }
    }
    userAdmin = (req, res, next) => {
        try {
            return res.render('panelUser');
        } catch (error) {
            return next(error)
        }
    }
    userDetail = (req, res, next) => {
        try {
            return res.render('userDetalle');
        } catch (error) {
            return next(error)
        }
    }
}

const usersController = new UserController();
export default usersController;