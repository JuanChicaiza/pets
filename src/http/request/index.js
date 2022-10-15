import { createUserRequest, getUserRequest } from "./userRequest.js";
import { authRequest } from "./authRequest.js";
import { createBreedRequest,updateBreedRequest,getBreedRequest,getBreedsRequest } from "./breedRequest.js";
import { getTypeRequest,createTypeRequest } from "./typeRequest.js";
import { getStateRequest } from "./stateRequest.js";
import { getClientBydocumentTypeAndDocumentIdRequest,createClientRequest,updateClientRequest,deleteClientRequest,getClientRequest } from "./clientRequest.js";
import { createPetRequest,updatePetRequest,adoptPetRequest,getAllPetRequest,getAllPetByClientRequest } from "./petRequest.js";

export {createUserRequest,getUserRequest,authRequest, createBreedRequest,updateBreedRequest,getBreedRequest,getBreedsRequest,getTypeRequest,createTypeRequest,getStateRequest,
getClientBydocumentTypeAndDocumentIdRequest,createClientRequest,updateClientRequest,createPetRequest,updatePetRequest,adoptPetRequest,getAllPetRequest,deleteClientRequest,
getClientRequest,getAllPetByClientRequest}