import usersMongoManager from "../data/mongo/manager/user.manager.js";
    
const create = async (req, res, next) => {
try {
    const data = req.body
    const response = await usersMongoManager.create(data)
    return res.status(201).json({
        message: "USERS CREATED",
        response: response._id
    })
} catch (error) {
    return next(error)
}
}
const readAll = async (req, res, next) => {
try {
    const filter = req.query
    const response = await usersMongoManager.readAll(filter)
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
const read = async (req, res, next) => {
try {
    const { id } = req.params;
    const response = await usersMongoManager.read(id);
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
const update = async (req, res, next) => {
try {
    const { id } = req.params;
    const data = req.body;
    const response = await usersMongoManager.update(id, data);
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
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await usersMongoManager.destroy(id);
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

// const loginFilter = async (req, res, next) => {
//     try {
//         const { email, role } = req.params;
//         const usersAll = await usersMongoManager.read();
        
//         // Filtrar usuarios por rol
//         const user = usersAll.find(user => user.role === role && user.email === email);
        
//         if (user) {
//             return res.status(401).send('Contraseña incorrecta');
//         } else {
//         return res.status(404).send('Usuario no encontrado');
//         }
//     } catch (error) {
//         return next(error)
//     }
// }

const userRegiter = (req, res, next) => {
    try {
        return res.render('userRegister');
    } catch (error) {
        return next(error)
    }
}
const login = (req, res, next) => {
    try {
        return res.render('login');
    } catch (error) {
        return next(error)
    }
}

const admin = (req, res, next) => {
    try {
        return res.render('panelAdmin');
    } catch (error) {
        return next(error)
    }
}
const userAdmin = (req, res, next) => {
    try {
        return res.render('panelUser');
    } catch (error) {
        return next(error)
    }
    }
export  {create, read, readAll, update, destroy, userRegiter, userAdmin, login, admin}

