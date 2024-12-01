import Services from './serverServices.js'
// import { createHash, isValidPassword } from "../utils.js";
import jwt from 'jsonwebtoken'
import "dotenv/config";
import { userDao } from './../dao/mongo/dao.user.js';

class UserService extends Services {
    constructor() {
        super(userDao); // ../dao/mongo/dao.user.js
    }

    generateToken = (user) => {
        const payload = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
            role: user.role,
        };

        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "20m" });
    };

    getUserByEmail = async (email) => {
        try {
            return await this.dao.getByEmail(email);
        } catch (error) {
            throw new Error(error);
        }
    };
    // Ejemplo: Autenticar usuario
    // authenticateUser = async (email, password) => {
    //     try {
    //         const user = await this.dao.findByEmail(email);
    //         if (user && user.password === password) {
    //             return user;
    //         }
    //         throw new Error('Invalid credentials');
    //     } catch (error) {
    //         throw error;
    //     }
    // };
    register = async (user) => {
        try {
            const { email, password, isGithub } = user;
            const existUser = await this.getUserByEmail(email);
            if (existUser) throw new Error("User already exists");
            if (isGithub) {
                const newUser = await this.dao.register(user);
                return newUser;
            }
            const newUser = await this.dao.register({
                ...user,
                password: createHash(password),
            });
            return newUser;
        } catch (error) {
            throw error;
        }
    };

    login = async (user) => {
        try {
            const { email, password } = user;
            const userExist = await this.getUserByEmail(email);
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
// export const getUserByEmail = async (email) => {
//     try {
//         return await userDao.getByEmail(email);
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// const getUserById = async (id) => {
//     try {
//         return await userDao.getById(id);
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// const register = async (user) => {
//     try {
//         const { email, password } = user;
//         const existUser = await getUserByEmail(email);
//         if(existUser) throw new Error('User already exists');
//             const newUser = await userDao.register({
//             ...user,
//             password: createHash(password),
//         });
//         return newUser;
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// export const login = async (email, password) => {
//     try {
//         // const { email, password } = user;
//         const userExist = await getUserByEmail(email);
//         if (!userExist) throw new Error('User not found');
//         const passValid = isValidPassword(password, userExist);
//         if (!passValid) throw new Error('incorrect credentials');
//         return userExist;
//     } catch (error) {
//         throw new Error(error);
//     }
// };