import express from "express";
import morgan from "morgan";

import guestsRoutes from "./routes/guests.routes.js";

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use("/api",guestsRoutes);

app.use((req,res,next)=>{
    res.status(404).json({message:"Not found"});
});

export default app;
