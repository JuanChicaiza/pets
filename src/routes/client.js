import { Router } from "express";
import { createClient,updateClient,getClientBydocumentTypeAndDocumentId } from "../controllers/clientController.js";
import { createClientRequest,updateClientRequest,getClientBydocumentTypeAndDocumentIdRequest } from "../http/request/clientRequest.js";

const clientRouter = Router()

clientRouter.post("/client",createClientRequest,createClient)
clientRouter.get("/client/:documentType/:documentId",getClientBydocumentTypeAndDocumentIdRequest,getClientBydocumentTypeAndDocumentId)
clientRouter.put("/client",updateClientRequest,updateClient)

export {clientRouter}