import { check, param } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";
import { isClientExists } from "../../utils/dbValidator.js";

const createClientRequest = [
    validateJwt,        
    check('documentType','Tipo de Documento Requerido').not().isEmpty(),
    check('documentId','Numero de Documento Requerido').not().isEmpty(),
    check('name','Nombre Requerido').not().isEmpty(),
    check('address','Direccion Requerida').not().isEmpty(),
    check('phone','Telefono Requerido').not().isEmpty(),
    check(['documentType','documentId']).custom(isClientExists),
    MessageErrorRequest
]

const getClientBydocumentTypeAndDocumentIdRequest = [
    validateJwt,        
    check('documentType','Tipo de Documento Requerido').not().isEmpty(),
    check('documentId','Numero de Documento Requerido').not().isEmpty(),
    MessageErrorRequest
]

const updateClientRequest = [
    validateJwt,        
    check('id','Id Requerido').not().isEmpty(),
    check('documentType','Tipo de Documento Requerido').not().isEmpty(),
    check('documentId','Numero de Documento Requerido').not().isEmpty(),
    check('name','Nombre Requerido').not().isEmpty(),
    check('address','Direccion Requerida').not().isEmpty(),
    check('phone','Telefono Requerido').not().isEmpty(),    
    MessageErrorRequest
]

export {createClientRequest,updateClientRequest,getClientBydocumentTypeAndDocumentIdRequest}