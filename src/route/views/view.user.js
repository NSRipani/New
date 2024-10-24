import { Router } from 'express';
import { userRegiter, login, admin, userAdmin} from '../../controllers/user.controller.js';
// import userController from './../../controllers/user.controller.js';

const userView = Router()

// userView.get("/", AllUsers)
userView.get("/register", userRegiter)
userView.get("/login", login)
userView.get("/panelAdmin", admin)
userView.get("/admin", userAdmin)



export default userView