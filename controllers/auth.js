import { response } from "express";
import  bcrypt  from "bcryptjs";
import { Usuario } from "../models/Usuario.js";

export const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Correo ya registrado",
      });
    }

    usuario = new Usuario(req.body);
    // encriptar contraseña

    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const loginUsuario = () => {};

export const revalidarToken = () => {};
