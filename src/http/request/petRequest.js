import { check, param } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { validateJwt } from "../middleware/validateJwt.js";

const createPetRequest = [
    validateJwt,        
    check('name','Nombre Requerido').not().isEmpty(),
    check('description','Descripcion Requerida').not().isEmpty(),
    check('image','Url Imagen Requerido').not().isEmpty(),
    check('typeId','Tipo de Mascota Requerido').not().isEmpty(),
    check('breedId','Raza Mascota Requerido').not().isEmpty(),
    MessageErrorRequest
]

const getAllPetRequest = [
    validateJwt    
]

const updatePetRequest = [
    validateJwt,        
    check('id','Id de Mascota Requerido').not().isEmpty(),
    check('name','Nombre Requerido').not().isEmpty(),
    check('description','Descripcion Requerida').not().isEmpty(),
    check('image','Url Imagen Requerido').not().isEmpty(),
    check('typeId','Tipo de Mascota Requerido').not().isEmpty(),
    check('breedId','Raza Mascota Requerido').not().isEmpty(),
    MessageErrorRequest
]

const adoptPetRequest = [
    validateJwt,        
    check('id','Id de Mascota Requerido').not().isEmpty(),
    check('clientId','Id de Cliente Requerido').not().isEmpty(),    
    MessageErrorRequest
]

export {createPetRequest,getAllPetRequest,updatePetRequest,adoptPetRequest}