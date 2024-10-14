import usersMongoManager from "../data/mongo/manager/user.mongo.js";
import usersManager from './../data/fs/user.manager.js';

class UserController{
  constructor() {}
  // Controladora para obtener todos los usuarios
  async getAllUsers(req, res, next) {
    try {
      const { role } = req.query;
      const response = await usersMongoManager.read(role);
      if (data.length > 0){
        return res.status(200).json({ 
        message: "USERS READ",
        response
      });
      } else {
        const error = new Error("NOT FOUND USERS");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error)
    }
  }
  
  // Controladora para obtener un usuario específico
  async getUser(req, res, next) {
    try {
      const { id } = req.params;
      const dataUser = await usersMongoManager.readOne(id);
      if (!dataUser) {
        // Si no hay usuarios con ese 'role', devolvemos un error 404
        const error = new Error(`No user found with ID: ${id}`);
        error.statusCode = 404;
        throw error;
      } else {
        return res.status(200).json({ 
          message: `User with the ID : ${id}`, 
          users: dataUser 
        });
      }
    } catch (error) {
      return next(error)
    }
  }
  
  // Controladora para crear un nuevo usuario
  async createUser(req, res, next) {
    try {
      // Asignar valores por defecto
      let userData = req.body
      const response = await usersMongoManager.create(userData);
      // RENDERIZR UNA VISTA DE USUARIO CREADO
      return res.status(201).json({ 
        message: "USER CREATED", 
        id: response 
      });
    } catch (error) {
      return next(error)
    }
  }
  
  // Controladora para actualizar un usuario
  async updateUser(req, res,next) {
    try {
      const { id } = req.params;
      const newData = req.body;
      const response = await usersMongoManager.update(id, newData);
      if (!response){
        const error = new Error(`User not found with id: ${req.params.id}`)
        error.statusCode = 404
        throw error
      }
      return res.status(200).json({ 
        message: "User update successfully", 
        user: response 
      });
    } catch (error) {
      return next(error)
    }
  }
  
  // Controladora para eliminar un usuario
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const response = await usersMongoManager.destroy(id);
      if (!response){
        const error = new Error(`User not found with id: ${id}`)
        error.statusCode = 404
        throw error
      }
      return res.status(200).json(response);
    } catch (error) {
      return next(error)
    }
  }
///////////////////////////////
  async AllUsers(req, res, next) {
    try {
      const { role } = req.query;
      // const usersAll = await usersMongoManager.read(role);
      const usersAll = await usersManager.read(role);
      if (usersAll.length > 0){
        return res.render("users", {users: usersAll});
      }
    } catch (error) {
      return next(error)
    }
  }

  // async loginFilter(req, res, next) {
  //   try {
  //     const { email, role } = req.params;
  //     const usersAll = await usersManager.read();
      
  //     // Filtrar usuarios por rol
  //     const user = usersAll.find(user => user.role === role && user.email === email);
      
  //     if (user) {
  //         return res.status(401).send('Contraseña incorrecta');
  //       } else {
  //       return res.status(404).send('Usuario no encontrado');
  //     }
  //   } catch (error) {
  //     return next(error)
  //   }
  // }

  // async loginUser(req, res, next) {
  //   try {
        // const { email, password } = req.query;
        // // const dataUser = await usersMongoManager.readOne(email, password);
        // const dataUser = await usersManager.readOne(email, password);
        // if (!dataUser) {
        //   // Si no hay usuarios con ese 'role', devolvemos un error 404
        //   const error = new Error(`No user found with ID: ${id}`);
        //   error.statusCode = 404;
        //   throw error;
        // } else {
        //   return res.render("/", {users: dataUser});
        // }
  //   } catch (error) {
  //     return next(error)
  //   }
  // }
  // async userProfile (req, res, next){
  //   try {
  //     const { id } = req.params;
  //     const userID = await usersMongoManager.readOne(id);
  //     // response es la respuesta que se espera del manager (para leer un producto)
  //     if (userID) {
  //       return res.render("userDetalle", {user: userID});     
  //     } else {
  //       const error = new Error(`Not found product with ID: ${id}`);
  //       error.statusCode = 404;
  //       throw error;
  //     }
  //   } catch (error) {
  //     next()
  //   }
  // }
  


  async admin (req, res, next){
    try {
      return res.render('panelAdmin');
    } catch (error) {
      return next(error)
    }
  }

  async userAdmin (req, res, next){
    try {
      return res.render('panelUser');
    } catch (error) {
      return next(error)
    }
  }

  async userRegiter (req, res, next){
    try {
      return res.render('userRegister');
    } catch (error) {
      return next(error)
    }
  }

  async login (req, res, next){
    try {
      return res.render('login');
    } catch (error) {
      return next(error)
    }
  }


}
const userController = new UserController()
export default userController
