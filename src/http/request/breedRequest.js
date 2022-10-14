import { check, param } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";

const createBreedRequest = [
    validateJwt,        
    check('name','Nombre Requerido').not().isEmpty(),
    check('description','Descripcion Requerida').not().isEmpty(),
    check('typeId','Tipo de Mascota Requerido').not().isEmpty(),

    MessageErrorRequest
]

const getBreedRequest = [
    validateJwt,        
    param('id','Tipo de Raza requerido'),    
    MessageErrorRequest
]

const updateBreedRequest = [
    validateJwt,        
    check('name','Nombre Requerido').not().isEmpty(),
    check('description','Descripcion Requerida').not().isEmpty(),    
    check('id','Id Requerido').not().isEmpty(),
    MessageErrorRequest
]

export {createBreedRequest,getBreedRequest,updateBreedRequest}