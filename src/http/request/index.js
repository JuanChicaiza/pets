import { createUserRequest, getUserRequest } from "./userRequest.js";
import { authRequest } from "./authRequest.js";
import { createBreedRequest,updateBreedRequest,getBreedRequest } from "./breedRequest.js";
import { getTypeRequest,createTypeRequest } from "./typeRequest.js";
import { getStateRequest } from "./stateRequest.js";
import { getClientBydocumentTypeAndDocumentIdRequest,createClientRequest,updateClientRequest } from "./clientRequest.js";
import { createPetRequest,updatePetRequest,adoptPetRequest,getAllPetRequest } from "./petRequest.js";

export {createUserRequest,getUserRequest,authRequest, createBreedRequest,updateBreedRequest,getBreedRequest,getTypeRequest,createTypeRequest,getStateRequest,
getClientBydocumentTypeAndDocumentIdRequest,createClientRequest,updateClientRequest,createPetRequest,updatePetRequest,adoptPetRequest,getAllPetRequest}