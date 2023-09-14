import express from "express";

import { UsuarioSchema as Usuario } from "../models/Usuario.js"

export const crearUsuario = async (req, res = response) => {
//   const { name, email, password } = req.body;

  const usuario = new Usuario(req.body);

  await usuario.save();

  res.status(201).json({
    ok:true,
    msg:"registro",

  })
};

export const loginUsuario = () => {

}


export const revalidarToken = () => {
  
}