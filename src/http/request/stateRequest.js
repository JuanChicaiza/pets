import { validateJwt } from "../middleware/validateJwt.js";

const getStateRequest = [
    validateJwt,                
]

export {getStateRequest}