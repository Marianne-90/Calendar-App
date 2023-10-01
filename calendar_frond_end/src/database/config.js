import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log("db online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar DB");
  }
};

