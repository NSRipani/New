import Services from './serverServices.js'
import { userDao } from './../dao/mongo/dao.user.js';
import { isValidPassword, createHash } from '../../utils.js';

class UserService extends Services {
    constructor() {
        super(userDao); // ../dao/mongo/dao.user.js
    }
    registerUser = async (user) => {
        try {
            const { email, password } = user;
            const existUser = await userDao.findByEmail(email) //getUserByEmail(email);
            if (existUser) throw new Error("User already exists");

            const newUser = await userDao.register({
                ...user,
                password: createHash(password)
            });
            return newUser;
        } catch (error) {
            throw error;
        }
    };

    async getUserById(id) {
        try {
            return await userDao.getById(id);
        } catch (error) {
            throw new Error(error);
        }
    };

    // Obtener todos los usuarios
    async getAllUsers() {
        try {
            const users = await this.allUsers()  // .dao.findAll();
            if (!users || users.length === 0) {
                throw new Error('No se encontraron usuarios.');
            }
            return users;
        } catch (error) {
            throw new Error(`Error obteniendo usuarios: ${error.message}`);
        }
    }

    login = async (user) => {
        try {
            const { email, password } = user;
            const userExist = await userDao.findByEmail(email)//userDao.findByEmail(email);
            
            if (!userExist) throw new Error("User not found");
            const passValid = isValidPassword(password, userExist);
            
            if (!passValid) throw new Error("incorrect credentials");
            
            return userExist;
            // return this.generateToken(userExist);
        } catch (error) {
            throw error;
        }
    };

    async getUserByRole(role) {
        try {
            return await userDao.findByRole(role);
        } catch (error) {
            throw new Error(error);
        }
    };
}

export const userService = new UserService();
