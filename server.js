import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
            
        });
    }catch(err){
        console.error("Failed to start server",err)
    }
};

startServer();