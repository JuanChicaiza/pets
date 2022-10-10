import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRouter,loginRouter,breedRouter ,typeRouter, stateRouter,clientRouter,petRouter} from "../routes/index.js";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use(userRouter);
app.use(loginRouter);
app.use(breedRouter);
app.use(typeRouter);
app.use(stateRouter);
app.use(clientRouter);
app.use(petRouter)

export default app;