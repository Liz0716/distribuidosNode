import { Router } from "express";
import { UserController } from "../app/controllers/UserController";


const router =Router();

// router.get('/getUsers',UserController.viwUser);


// Ruta para registrar un usuario
router.post('/registro', UserController.registroUser);

// Ruta para iniciar sesión
router.post('/login', UserController.loginUser);
export default router;

