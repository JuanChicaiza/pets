import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";

const createTypeRequest = [
    validateJwt,        
    check('name','Nombre Requerido').not().isEmpty(),
    MessageErrorRequest
]

const getTypeRequest = [
    validateJwt,
    MessageErrorRequest
]

export {createTypeRequest,getTypeRequest}