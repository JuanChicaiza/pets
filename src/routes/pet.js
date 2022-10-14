import { Router } from "express";
import { createPet,updatePet,adoptPet,getAllPet } from "../controllers/petController.js";
import { createPetRequest,updatePetRequest,adoptPetRequest,getAllPetRequest } from "../http/request/index.js";

const petRouter = Router()

petRouter.post("/pet",createPetRequest,createPet)
petRouter.get("/pet",getAllPetRequest,getAllPet)
petRouter.put("/pet",updatePetRequest,updatePet)
petRouter.post("/pet/adopt",adoptPetRequest,adoptPet)

export {petRouter}