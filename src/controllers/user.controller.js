import Controllers from './controller.js';
import { userService } from './../service/user.service.js';

class UserController extends Controllers {
    constructor(){
        super(userService)
    }

    // agregar funciones 'login', 'regitrer' y 'private'

    // Ejemplo: Autenticar usuario
    authenticateUser = async (email, password) => {
        try {
            const user = await this.dao.findByEmail(email);
            if (user && user.password === password) {
                return user;
            }
            throw new Error('Invalid credentials');
        } catch (error) {
            throw error;
        }
    };

    create = async (req, res, next) => {
        try {
            const data = req.body
            const response = await this.service.create(data)
            return res.status(201).json({
                message: "USERS CREATED",
                response: response._id
            })
        } catch (error) {
            return next(error)
        }
    }
    readAll = async (req, res, next) => {
        try {
            const filter = req.query
            const response = await this.service.readAll(filter)
            if (response.length > 0) {
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
    read = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.service.read(id);
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
    update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const response = await this.service.update(id, data);
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
    destroy = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.service.destroy(id);
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
    regiterView = (req, res, next) => {
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
}

const usersController = new UserController();
export default usersController;