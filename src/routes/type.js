import { Router } from "express";
import { getAllType,createType } from "../controllers/typeController.js";
import { createTypeRequest, getTypeRequest } from "../http/request/index.js";

const typeRouter = Router()

typeRouter.post("/type",createTypeRequest,createType)
typeRouter.get("/type",getTypeRequest,getAllType)

export {typeRouter}