import { Router } from "express";
import { createClient,updateClient,getClientBydocumentTypeAndDocumentId,getAllClients } from "../controllers/clientController.js";
import { createClientRequest,updateClientRequest,getClientBydocumentTypeAndDocumentIdRequest,getClientRequest } from "../http/request/clientRequest.js";

const clientRouter = Router()

clientRouter.post("/client",createClientRequest,createClient)
clientRouter.get("/client/id/:documentType/:documentId",getClientBydocumentTypeAndDocumentIdRequest,getClientBydocumentTypeAndDocumentId)
clientRouter.put("/client",updateClientRequest,updateClient)
clientRouter.get("/client",getClientRequest,getAllClients)
export {clientRouter}