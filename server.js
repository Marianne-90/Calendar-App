// server.js
import express from "express";
import dotenv from "dotenv";
import 'esm';

import cors from "cors";
import { dbConnection } from "./src/database/config.js";

// Utiliza import para cargar módulos ESM
import { router as authRoutes} from './routes/auth.js';

dotenv.config();

const app = express();

dbConnection();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
