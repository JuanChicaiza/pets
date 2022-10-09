import User from "../models/user.js";
import Client from "../models/client.js";

const isUserExists = async (documentId)=>{
    const message = "Usuario ya Registrado"
    try {
        const userExists = await User.findOne({where:{documentId:documentId}})
        if(userExists){
            throw new Error(message)
        }
    } catch (error) {
        throw new Error(message)
    }
}

const isUserNameExists = async userName =>{
    const message = "userName ya registrado"
    try{
        const userNameExists = await User.findOne({where:{userName:userName}})
        if(userNameExists){
            throw new Error(message)
        }
    } catch (error){
        throw new Error(message)
    }
}

const isClientExists = async(documentType,documentId)=>{
    const message = "Cliente Ya Existe"
    try{
        const clientExists = await Client.findOne({where:{documentType:documentType,documentId:documentId}})
        if(clientExists){
            throw new Error(message)
        }
    }catch (error){
        throw new Error(error)
    }
}

export {isUserExists,isUserNameExists,isClientExists}