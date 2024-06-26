import { Router } from "express";


const router = Router()


import {
    login,
    perfil,
    registro,
    confirmarEmail,
    listarEntrenadores,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
    detallesAdministrador
} from "../controllers/administrator_controller.js"

router.post('/login',login)
router.post('/register',registro)
router.get('/confirmation/:token',confirmarEmail)
router.get('/administrators',listarEntrenadores)
router.post('/recover-password',recuperarPassword)
router.get('/recover-password/:token',comprobarTokenPasword)
router.post('/new-password/:token',nuevoPassword)

router.get('/perfil',perfil)
router.put('/administrator/actualizarpassword',actualizarPassword)
router.put('/administrator/:id',actualizarPerfil)
router.get('/administrator/:id',detallesAdministrador)

export default router