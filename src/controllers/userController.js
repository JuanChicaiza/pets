import bcrypt from "bcryptjs";
import User from "../models/user.js";

const createUser = async(req,res) =>{
    const { documentType,
        documentId,
        firstName,
        lastName,
        userName,
        password,
        role } = req.body    

    const salt = bcrypt.genSaltSync()    
    const pass = bcrypt.hashSync(password, salt)

    const user = await User.create({
        documentType: documentType,
        documentId: documentId,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: pass,
        role: role
    })    

    res.status(201).json(user);
}

const getAllUsers = async (req,res)=>{      
    res.send(await User.findAll())
}

export {createUser, getAllUsers}