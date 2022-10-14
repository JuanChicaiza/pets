import { Router } from "express";
import { getAllState } from "../controllers/stateController.js";
import { getStateRequest } from "../http/request/index.js";

const stateRouter = Router()

stateRouter.get("/state",getStateRequest,getAllState)

export {stateRouter}