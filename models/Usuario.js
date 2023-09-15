import { Schema, model } from "mongoose";

const usuarioSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});


// Crea y exporta el modelo basado en el esquema
export const Usuario = model('Usuario', usuarioSchema);