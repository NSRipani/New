import usersDao from "../data/mongo/dao/dao.user.js";
    
const create = async (req, res, next) => {
try {
    const data = req.body
    const response = await usersDao.create(data)
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
    const response = await usersDao.readAll(filter)
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
    const response = await usersDao.read(id);
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
    const response = await usersDao.update(id, data);
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
        const response = await usersDao.destroy(id);
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
const registerResponse = async (req, res, next) => {
    try {
        res.json({
            message: 'Register OK',
            session: req.session
        })
        } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        //req.session.passport.user
        const id = req.session.passport.user || null;
        const user = await services.getUserById(id);
        res.json(user);
        // const { email, role } = req.query; 
        // const users = await usersDao.readLogin({email, role});
        
        // const user = users.find(user => user.role === role && user.email === email);
        
        // if (!user) {
        //     return res.status(404).json({ message: 'User not found' });
        // } else {
        //     return res.status(200).json({ message: 'User found', data: user });
        // }
    } catch (error) {
        next(error);
    }
};

const regiterView = (req, res, next) => {
    try {
        return res.render('userRegister');
    } catch (error) {
        return next(error)
    }
}
const loginView = (req, res, next) => {
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
export  {create, read, readAll, update, destroy, regiterView,registerResponse,login, userAdmin, loginView, admin}

