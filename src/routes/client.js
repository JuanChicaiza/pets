import { Router } from "express";
import { createClient,updateClient,getClientBydocumentTypeAndDocumentId,getAllClients,deleteClient } from "../controllers/clientController.js";
import { createClientRequest,updateClientRequest,getClientBydocumentTypeAndDocumentIdRequest,getClientRequest,deleteClientRequest } from "../http/request/clientRequest.js";

const clientRouter = Router()

clientRouter.post("/client",createClientRequest,createClient)
clientRouter.get("/client/:documentType/:documentId",getClientBydocumentTypeAndDocumentIdRequest,getClientBydocumentTypeAndDocumentId)
clientRouter.get("/client",getClientRequest,getAllClients)
clientRouter.put("/client",updateClientRequest,updateClient)
clientRouter.delete("/client/:id",deleteClientRequest,deleteClient)
export {clientRouter}