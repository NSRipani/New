import { generateToken } from '../auth/auth.js'
import Controllers from './controller.js';
import { userService } from './../service/user.service.js';
// import { jwt } from 'jsonwebtoken';

class UserController extends Controllers {
    constructor() {
        super(userService)
    }

    // agregar funciones 'login', 'regitrer' y 'private'
    privateData = (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({ error: "No se puede acceder a los datos del usuario" });
            } else {
                res.json({ user: req.user });
            }
        } catch (error) {
            next(error);
        }
    };

    login = async (req, res, next) => {
        try {
            // Validar la entrada
            const user = await userService.login(req.body);
            const token = generateToken(user)  
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.HTTP === 'token',
                sameSite: 'Strict'
            }).json({ message: 'Login OK', token });//
        } catch (error) {
            next(error);
        }
    };

    // Crear usuario = register
    create = async (req, res, next) => {
        try {
            const data = req.body
            const response = await userService.registerUser(data)
            console.log(response)
            return res.status(201).json({ message: "USERS CREATED", response })
        } catch (error) {
            return next(error)
        }
    }

    // Leer todos los usuarios
    readAll = async (req, res, next) => {
        try {
            // const filter = req.query
            const response = await userService.findAll() //getAll()//userService.getAllUsers()//this.service.getAll()
            if (response.length > 0) {//.length > 0
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
    readID = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await userService.getById(id)//userService.getById(id);
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

    //Leer por Email
    readByemail = async (req, res, next) => {
        try {
            const { role } = req.params;
            const response = await this.findUserByEmail(email) //getRole(role);
            if (response) {
                return res.status(200).json({ message: "USERS READ", response });
            } else {
                const error = new Error("USERs NOT FOUND");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            return next(error)
        }
    }

    //Leer por Role
    readByRole = async (req, res, next) => {
        try {
            const { role } = req.params;
            const response = await this.findAllByRole(role) //getRole(role);
            if (response) {
                return res.status(200).json({ message: "USERS ROLE", response });
            } else {
                const error = new Error("USERS ROLE NOT FOUND");
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
            const response = await userService.update(id, data) // userService.update(id, data);
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
            const response = await userService.delete(id) //userService.delete(id);
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
}

const usersController = new UserController();
export default usersController;