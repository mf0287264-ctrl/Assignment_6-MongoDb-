import { Router } from "express";
import * as AuthorsController from "./Authors.controller.js";

const authorsRouter = Router();

authorsRouter.post("/", AuthorsController.insertAuthor);

export default authorsRouter;
