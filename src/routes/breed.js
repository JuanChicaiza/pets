import { Router } from "express";
import { getAllBreedByType,createBreed,updateBreed,getBreedById,getBreeds } from "../controllers/breedController.js";
import { createBreedRequest, getBreedRequest,updateBreedRequest,getBreedsRequest } from "../http/request/index.js";

const breedRouter = Router()

breedRouter.post("/breed",createBreedRequest,createBreed)
breedRouter.get("/breed/:type",getBreedRequest,getAllBreedByType)
breedRouter.put("/breed",updateBreedRequest,updateBreed)
breedRouter.get("/breed/id/:id",getBreedRequest,getBreedById)
breedRouter.get("/breeds",getBreedsRequest,getBreeds)

export {breedRouter}