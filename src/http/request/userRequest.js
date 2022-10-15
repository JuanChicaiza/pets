import { check } from "express-validator";
import MessageErrorRequest from "../middleware/messageErrorRequest.js";
import { isUserExists, isUserNameExists } from "../../utils/dbValidator.js";
import { validateJwt } from "../middleware/validateJwt.js";

const createUserRequest = [
    //validateJwt,
    check('documentType','Tipo de Documento Requerido').not().isEmpty(),
    check('documentId','Numero de Documento Requerido').not().isEmpty(),
    check('firstName','Nombre Requerido').not().isEmpty(),
    check('lastName','Apellido Requerido').not().isEmpty(),
    check('userName','Usuario Requerido').not().isEmpty(),
    check('password','Contraseña Requerida').not().isEmpty(),
    check('role','Rol Requerido').not().isEmpty(),
    check('documentId').custom(isUserExists),
    check('userName').custom(isUserNameExists),
    MessageErrorRequest
]

const getUserRequest = [
    validateJwt
]

export {createUserRequest,getUserRequest}