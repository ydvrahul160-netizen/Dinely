import { response } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

const signUp = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({message:"User Already Exist"});
    }
    if(password.length<6){
        return res.status(400).json({message:"Password must be atleast 6 characters."});
    }
    if(mobile.length<10){
        return res.status(400).json({message:"Mobile number must be atleast 10 digits."});
    }
    const hashedPassword = await bcrypt.hash(password,10);

    user = await User.create({
        fullName,
        email,
        mobile,
        role,
        password:hashedPassword
    })

    
  } catch (error) {}
};
