import { Router } from "express";
import * as LogsController from "./Logs.controller.js";

const logsRouter = Router();

logsRouter.post("/", LogsController.insertLog);

export default logsRouter;
