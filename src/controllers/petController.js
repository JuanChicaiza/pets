import Pet from "../models/pet.js";

const createPet = async(req,res)=>{    
    try {
        const {name,description,image,typeId,breedId} = req.body;
        const pet = await Pet.create({
            name:name,
            description:description,
            image:image,
            TypeId:typeId,
            BreedId:breedId,
            StateId:1
        })
        res.status(201).json(pet)        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

const updatePet = async(req,res)=>{
    try {
        const {id,name,description,image,typeId,breedId} = req.body;
        await Pet.update({
            name:name,
            description:description,
            image:image,
            TypeId:typeId,
            BreedId:breedId            
        },{
            where:{
                id:id
            }
        })
        res.status(200).json(await Pet.findOne({where:{id:id}}))
        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }
}

const adoptPet = async(req,res)=>{
    try {
        const {id,clientId} = req.body;
        await Pet.update({
            ClientId:clientId,
            StateId:2
        })
        res.status(200).json(await Pet.findOne({where:{id:id}}))
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }
}

const getAllPet = async(req,res)=>{
    try {
        res.status(200).json(await Pet.findAll())
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }
}

export {createPet,updatePet,adoptPet,getAllPet}