import User from "../models/User.js";

const getUsers = async (req,res,next)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        next(err);
    }
};

const createUser = async (req,res,next)=>{
    try{
        const {name,email}= req.body;
        if(!name || !email){
            const error = new Error("name and email are required");
            error.status=400;
            return next(error);
        };
        const newUser = await User.create({name,email});
        res.status(201).json({
            message:"New user created",
            user:newUser
        });
    }catch(err){
        next(err);
    }
};

export { getUsers, createUser };