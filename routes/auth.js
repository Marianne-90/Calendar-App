import { validarCampos } from "../middlewares/validar-campos.js";
import {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} from "../controllers/auth.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

import { Router } from "express";
import { check } from "express-validator";

export const router = Router();

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);
