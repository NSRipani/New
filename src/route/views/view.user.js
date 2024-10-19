import { Router } from 'express';
import { userRegiter, login} from '../../controllers/user.controller.js';
// import userController from './../../controllers/user.controller.js';

const userView = Router()

// userView.get("/", AllUsers)
userView.get("/register", userRegiter)
userView.get("/login", login)
// userView.get("/admin", userAdmin)
// userView.get("/paneladmin", admin)



export default userView