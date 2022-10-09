import Breed from "../models/breed.js";

const getAllBreedByType = async(req,res)=>{
    try {
        const typeId = req.params.type;
        res.status(200).json(await Breed.findAll({where:{TypeId:typeId}}))        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

const createBreed = async(req,res)=>{
    try {
            const {name,description,typeId} = req.body;
            const breed = await Breed.create({
            name:name,
            description:description,
            TypeId:typeId
        })
        res.status(201).json(breed)        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

const updateBreed = async(req,res)=>{
    try {
        const {id,name,description} = req.body;
        const breed = await Breed.update({
            name:name,
            description:description
        },
        {where:{id:id}})
        res.status(200).json(breed)        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

export { getAllBreedByType,createBreed,updateBreed }