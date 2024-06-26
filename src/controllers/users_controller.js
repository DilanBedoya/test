import Administrator from "../models/users.js";
import mongoose from "mongoose";

const login = async (req,res) => {}

const perfil = (req,res) => {}

const registro = async(req,res) => {}

const confirmarEmail = async (req,res) => {}

const listarUsuarios = (req,res) => {}

const detallesUsuario = (req,res) => {}

const actualizarPerfil = async (req,res) => {}

const actualizarPassword = async (req,res)=>{}

const recuperarPassword= async (req,res)=>{}

const comprobarTokenPasword= async (req,res)=>{}

const nuevoPassword= async (req,res)=>{}

export{
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