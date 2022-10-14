import bcrypt from "bcryptjs";
import User from "../models/user.js";
import generateJWT from "../utils/generateToken.js";

const login = async (req,res) => {    
    const {username,password} = req.body
    const user = await User.findOne({where:{userName:username}})

    if(!user){
        return res.status(404).json({
            status:404,
            error:{
                title:"Usuario o contraseña no valida",
                message:"Usuario o contraseña no valida"
            }
        })
    }

    if(!user.status){
        return res.status(403).json(
            {
                status: 403,
                error: {
                    title: "Usuario no Activo",
                    message: "Usuario no Activo, contacte con el administrador del sistema"
                }
            }
        )
    }

    const isMatch = bcrypt.compareSync(password,user.password)

    if(!isMatch){
        return res.status(400).json(
            {
                status: 400,
                error: {
                    title: "Usuario o contraseña no valida",
                    message: "Usuario o contraseña no valida, Contacte con el administrador del sistema."
                }
            }
        )
    }

    const token = await generateJWT(user.id);

    const attributes = user.toJSON()
    const data = {attributes,token}
    res.status(200).json(data);
}

export default login;