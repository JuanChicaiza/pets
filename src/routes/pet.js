import { Router } from "express";
import { createPet,updatePet,adoptPet,getAllPet,getAllPetByClient } from "../controllers/petController.js";
import { createPetRequest,updatePetRequest,adoptPetRequest,getAllPetRequest,getAllPetByClientRequest } from "../http/request/index.js";

const petRouter = Router()

petRouter.post("/pet",createPetRequest,createPet)
petRouter.get("/pet",getAllPetRequest,getAllPet)
petRouter.get("/pet/client/:id",getAllPetByClientRequest,getAllPetByClient)
petRouter.put("/pet",updatePetRequest,updatePet)
petRouter.post("/pet/adopt",adoptPetRequest,adoptPet)

export {petRouter}