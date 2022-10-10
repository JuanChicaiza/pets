import Client from "../models/client.js";

const createClient = async(req,res)=>{
    try {
        const { documentType,documentId,name,address,phone } = req.body;
        const client = await Client.create({
            documentType: documentType,
            documentId: documentId,
            name: name,
            address: address,
            phone: phone
        })
        res.status(201).json(client);        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

const updateClient = async(req,res)=>{
    try {
        const { id,documentType,documentId,name,address,phone } = req.body;
        await Client.update({
            documentType: documentType,
            documentId: documentId,
            name: name,
            address: address,
            phone: phone
        },{
            where:{id:id}
        })
        res.status(200).json(Client.findAll({where:{id:id}}))        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

const getClientBydocumentTypeAndDocumentId = async(req,res)=>{
    try {
        const {documentType,documentId} = req.body;
        res.status(200).json(await Client.findAll({where:{documentType:documentType,documentId:documentId}}))        
    } catch (error) {
        res.status(500).json({message:"Error Interno del servidor",detail:error})
    }    
}

export {createClient,updateClient,getClientBydocumentTypeAndDocumentId}