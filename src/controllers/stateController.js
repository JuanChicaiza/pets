import State from "../models/state.js";

const getAllState = async(req,res)=>{
    res.status(200).json(await State.findAll())
}

export {getAllState}