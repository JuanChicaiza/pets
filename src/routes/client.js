import { Router } from "express";
import { createClient,updateClient,getClientBydocumentTypeAndDocumentId,deleteClient } from "../controllers/clientController.js";
import { createClientRequest,updateClientRequest,getClientBydocumentTypeAndDocumentIdRequest,deleteClientRequest } from "../http/request/clientRequest.js";

const clientRouter = Router()

clientRouter.post("/client",createClientRequest,createClient)
clientRouter.get("/client/:documentType/:documentId",getClientBydocumentTypeAndDocumentIdRequest,getClientBydocumentTypeAndDocumentId)
clientRouter.put("/client",updateClientRequest,updateClient)
clientRouter.delete("/client/:id",deleteClientRequest,deleteClient)

export {clientRouter}