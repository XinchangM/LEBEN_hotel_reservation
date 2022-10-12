import express from "express";
import { PrismaClient } from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import reservRoute from "./routes/reservations.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";


const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));



app.use("/api/reservations", reservRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });




  
  
app.listen(8000, () => {
    console.log("Server running on http://localhost:8000 🎉 🚀");
});
  