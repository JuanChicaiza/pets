import State from "../models/state.js";

const getAllState = async(req,res)=>{
    try {
        res.status(200).json(await State.findAll())        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

export {getAllState}