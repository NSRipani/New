import Services from './serverServices.js'
import jwt from 'jsonwebtoken'
import "dotenv/config";
import { userDao } from './../dao/mongo/dao.user.js';
import { isValidPassword, createHash } from './../../utils.js';

class UserService extends Services {
    constructor() {
        super(userDao); // ../dao/mongo/dao.user.js
    }

    generateToken = (user) => {
        const payload = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
            role: user.role,
        };

        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "20m" });
    };
    
    // Obtener todos los usuarios
    async getAllUsers() {
        try {
            const users = await this.getAll()// .dao.findAll();
            if (!users || users.length === 0) {
                throw new Error('No se encontraron usuarios.');
            }
            return users;
        } catch (error) {
            throw new Error(`Error obteniendo usuarios: ${error.message}`);
        }
    }
    registerUser = async (user) => {
        try {
            const { email, password } = user;
            const existUser = await this.getUserByEmail(email);
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

    login = async (user) => {
        try {
            const { email, password } = user;
            const userExist = await userDao.findByEmail(email);
            if (!userExist) throw new Error("User not found");
            const passValid = isValidPassword(password, userExist);
            if (!passValid) throw new Error("incorrect credentials");
            return this.generateToken(userExist);
        } catch (error) {
            throw error;
        }
    };
}

export const userService = new UserService();

// // Ejemplo: Autenticar usuario
// authenticateUser = async (email, password) => {
//     try {
//         const user = await userDao.getUserByEmail(email);
//         if (user && user.password === password) {
//             return user;
//         }
//         throw new Error('Invalid credentials');
//     } catch (error) {
//         throw error;
//     }
// };