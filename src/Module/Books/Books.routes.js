import { Router } from "express";
import * as BooksController from "./Books.controller.js";

const booksRouter = Router();

booksRouter.post("/batch", BooksController.insertBatchBooks);
booksRouter.post("/", BooksController.insertSingleBook);
booksRouter.patch("/:title", BooksController.updateBookYearByTitle);
booksRouter.get("/title", BooksController.findBookByTitle);
booksRouter.get("/year", BooksController.findBooksByYearRange);
booksRouter.get("/genre", BooksController.findBooksByGenre);
booksRouter.get("/skip-limit", BooksController.skipLimitBooks);
booksRouter.get("/year-integer", BooksController.findBooksByIntegerYear);
booksRouter.get("/exclude-genres", BooksController.findBooksExcludeGenres);
booksRouter.delete("/before-year", BooksController.deleteBooksBeforeYear);
booksRouter.get("/aggregate1", BooksController.aggregate1);
booksRouter.get("/aggregate2", BooksController.aggregate2);
booksRouter.get("/aggregate3", BooksController.aggregate3);
booksRouter.get("/aggregate4", BooksController.aggregate4);

export default booksRouter;
