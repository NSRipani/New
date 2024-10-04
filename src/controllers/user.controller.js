import usersManager from "../data/user.manager.js";

class UserController{
  constructor() {}
  // Controladora para obtener todos los usuarios
  async getAllUsers(req, res, next) {
    try {
      const { role } = req.query;
      const response = await usersManager.read(role);
      return res.status(200).json({ 
        message: "USERS READ",
        response
      });
    } catch (error) {
      return next(error)
    }
  }
  
  // Controladora para obtener un usuario específico
  async getUser(req, res, next) {
    try {
      const { id } = req.params;
      const dataUser = await usersManager.readOne(id);
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
      const { photo, email, password, role } = req.body;
      
      // Verificar si el usuario ya existe
      // const existingUser = await usersManager.readOne({ email });
      // if (existingUser) {
      //   return res.status(400).send("El correo ya está registrado.");
      // }
      // Asignar valores por defecto
      const userData = {
        photo, 
        email,
        password,
        role 
      };
      const response = await usersManager.create(userData);
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
      const response = await usersManager.update(id, newData);
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
      const response = await usersManager.destroy(id);
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

  async AllUsers(req, res, next) {
    try {
      const { role } = req.query;
      const usersAll = await usersManager.read(role);
      if (usersAll.length > 0){
        return res.render("users", {users: usersAll});
      }
    } catch (error) {
      return next(error)
    }
  }
  async userProfile (req, res, next){
    try {
      const { id } = req.params;
      const userID = await usersManager.readOne(id);
      // response es la respuesta que se espera del manager (para leer un producto)
      if (userID) {
        return res.render("userDetalle", {user: userID});     
      } else {
        const error = new Error(`Not found product with ID: ${id}`);
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      next()
    }
  }
  
  async userRegiter (req, res, next){
    try {
      return res.render('userRegister');
    } catch (error) {
      next(error)
    }
  }

  async login (req, res, next){
    try {
      return res.render('login');
    } catch (error) {
      next(error)
    }
  }

  async controllerLogin (req, res, next) {
    try {
      const { email, password } = req.body;
      // Verificar si existe un usuario con el email y contraseña proporcionados
      const user = await usersManager.getAllUsers(
        (user) => user.email === email && user.password === password
      );
    
      if (!user) {
        return res.send(`
          <script>
              Toastify({
                  text: "Correo electrónico o contraseña incorrectos.",
                  duration: 3000,
                  gravity: "top", // "top" or "bottom"
                  position: "center", // "left", "center" or "right"
                  backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
              }).showToast();
              setTimeout(() => { window.location.href = '/login'; }, 3000); // Redirigir después de 3 segundos
          </script>
      `);
      }
      
    } catch (error) {
      next(error)
    }
  
  
    // Si las credenciales son correctas, enviar un mensaje de éxito
    return res.redirect('home')
  };
}

const userController = new UserController()
export default userController