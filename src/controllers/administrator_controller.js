import Administrator from "../models/administrator.js";
import mongoose from "mongoose";

const login = async (req,res) => {}

const perfil = (req,res) => {}

const registro = async(req,res) => {}

const confirmarEmail = async (req,res) => {}

const listarEntrenadores = (req,res) => {}

const detallesAdministrador = (req,res) => {}

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
    listarEntrenadores,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
    detallesAdministrador
}