import * as BooksService from "./Books.service.js";

export const insertSingleBook = (req, res) => BooksService.insertSingleBookService(req, res);
export const insertBatchBooks = (req, res) => BooksService.insertBatchBooksService(req, res);
export const updateBookYearByTitle = (req, res) => BooksService.updateBookYearByTitleService(req, res);
export const findBookByTitle = (req, res) => BooksService.findBookByTitleService(req, res);
export const findBooksByYearRange = (req, res) => BooksService.findBooksByYearRangeService(req, res);
export const findBooksByGenre = (req, res) => BooksService.findBooksByGenreService(req, res);
export const skipLimitBooks = (req, res) => BooksService.skipLimitBooksService(req, res);
export const findBooksByIntegerYear = (req, res) => BooksService.findBooksByIntegerYearService(req, res);
export const findBooksExcludeGenres = (req, res) => BooksService.findBooksExcludeGenresService(req, res);
export const deleteBooksBeforeYear = (req, res) => BooksService.deleteBooksBeforeYearService(req, res);
export const aggregate1 = (req, res) => BooksService.aggregate1Service(req, res);
export const aggregate2 = (req, res) => BooksService.aggregate2Service(req, res);
export const aggregate3 = (req, res) => BooksService.aggregate3Service(req, res);
export const aggregate4 = (req, res) => BooksService.aggregate4Service(req, res);
