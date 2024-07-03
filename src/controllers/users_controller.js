import users from "../models/users.js";
import Administrator from "../models/users.js";
import mongoose from "mongoose";
import {
    sendMailToRecoveryPassword, sendMailToUser
} from "../config/nodemailer.js";

import generarJWT from '../helpers/crearJWT.js';

const login = async (req, res) => {
    //Actividad 1
    const { email, password } = req.body;

    // Actividad 2

    //VALIDACIONES
    //campos vacios
    if (Object.values(req.body).includes(""))
        return res
            .status(404)
            .json({ msg: "Lo sentimos, debes llenar todos los campos" });

    const usersBDD = await users.findOne({ email });

    //confirmacion de la cuenta
    if (usersBDD?.confirmarEmail === false)
        return res
            .status(403)
            .json({ msg: "Lo sentimos, debes verificar tu cuenta" });

    //el email que ingreso
    if (!usersBDD)
        return res.status(404).json({
            msg: "Lo sentimos, no existe ese email",
        });

    //el password que ingreso
    const verificarPassword = await usersBDD.matchPassword(password);
    if (!verificarPassword)
        return res.status(404).json({
            msg: "Lo sentimos, el password no es correcto",
        });

    // Acitividad 3

    const { name, lastname, telefono, _id } = usersBDD;
    const token = generarJWT(usersBDD._id, "veterinario");
    //Actividad 4
    res.status(202).json({
        token,
        name,
        lastname,
        telefono,
        _id,
        email: usersBDD.email,
    });

}

const perfil = (req, res) => { }

const registro = async (req, res) => {

    // ACTIVIDAD 1
    const { email, password } = req.body;

    // ACTIVIDAD 2
    if (Object.values(req.body).includes(""))
        return res
            .status(400)
            .json({ msg: "Lo sentimos, debes llenar todos los campos" }); //Includes valida espacios vacios

    const verificarEmailBDD = await users.findOne({ email });
    if (verificarEmailBDD)
        return res
            .status(400)
            .json({ msg: "Lo sentimos, el email ya se encuentra registrado" }); //Includes valida espacios vacios

    // ACTIVIDAD 3
    const nuevoUser = new users(req.body);
    nuevoUser.password = await nuevoUser.encrypPassword(password);

    const token = nuevoUser.crearToken();
    await sendMailToUser(email, token);
    await nuevoUser.save();

    // ACTIVIDAD 4
    res
        .status(200)
        .json({ msg: "Revisa tu correo electrónico para verificar tu cuenta" });
}

const confirmarEmail = async (req, res) => {

    //ACTIIVIDAD 1
    if (!req.params.token)
        return res
            .status(400)
            .json({ msg: "Lo sentimos, no se puede validar la cuenta" });
    const usersBDD = await users.findOne({ token: req.params.token });

    //ACTIIVIDAD 2
    if (!usersBDD?.token)
        return res.status(404).json({ msg: "La cuenta ya ha sido confirmada" });

    //ACTIIVIDAD 3
    usersBDD.confirmarEmail = true;
    usersBDD.token = null;
    await usersBDD.save();

    //ACTIIVIDAD 4
    res.status(200).json({ msg: "Token confirmado, ya puedes iniciar sesión" });
};


const listarVeterinarios = (req, res) => {
    res.status(200).json({ res: "lista de veterinarios registrados" });

}

const listarUsuarios = (req, res) => { }

const detallesUsuario = (req, res) => { }

const actualizarPerfil = async (req, res) => { }

const actualizarPassword = async (req, res) => { }

const recuperarPassword = async (req, res) => { }

const comprobarTokenPasword = async (req, res) => { }

const nuevoPassword = async (req, res) => { }

export {
    login,
    perfil,
    registro,
    confirmarEmail,
    listarUsuarios,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
    detallesUsuario
}