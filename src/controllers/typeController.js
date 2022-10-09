import Type from "../models/type.js";

const getAllType = async(req,res)=>{
    res.status(200).json(await Type.findAll())
}

const createType = async(req,res)=>{
    const {name} = req.body;
    const type = await Type.create({
        name:name
    })
    res.status(201).json(type)
}

export {getAllType,createType}