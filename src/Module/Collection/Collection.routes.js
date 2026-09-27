import { Router } from "express";
import * as CollectionController from "./Collection.controller.js";

const collectionRouter = Router();

collectionRouter.post("/books", CollectionController.createExplicitBooksCollection);
collectionRouter.post("/authors", CollectionController.createImplicitAuthorsCollection);
collectionRouter.post("/logs/capped", CollectionController.createCappedLogsCollection);
collectionRouter.post("/books/index", CollectionController.createBooksIndex);

export default collectionRouter;
