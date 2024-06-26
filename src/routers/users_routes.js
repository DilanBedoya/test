import { Router } from "express";


const router = Router()


import {
    login,
    perfil,
    registro,
    confirmarEmail,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
    listarUsuarios,
    detallesUsuario
} from "../controllers/users_controller.js"

router.post('/login',login)
router.post('/register',registro)
router.get('/confirmation/:token',confirmarEmail)
router.get('/administrators',listarUsuarios)
router.post('/recover-password',recuperarPassword)
router.get('/recover-password/:token',comprobarTokenPasword)
router.post('/new-password/:token',nuevoPassword)

router.get('/perfil',perfil)
router.put('/administrator/actualizarpassword',actualizarPassword)
router.put('/administrator/:id',actualizarPerfil)
router.get('/administrator/:id',detallesUsuario)

export default router