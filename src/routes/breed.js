import { Router } from "express";
import { getAllBreedByType,createBreed,updateBreed } from "../controllers/breedController.js";
import { createBreedRequest, getBreedRequest,updateBreedRequest } from "../http/request/index.js";

const breedRouter = Router()

breedRouter.post("/breed",createBreedRequest,createBreed)
breedRouter.get("/breed/:type",getBreedRequest,getAllBreedByType)
breedRouter.put("/breed",updateBreedRequest,updateBreed)

export {breedRouter}