import express from "express";
import userRoutes from "./routes/users.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app=express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
    
});

app.use("/users",userRoutes);
app.use(errorMiddleware);

export default app;