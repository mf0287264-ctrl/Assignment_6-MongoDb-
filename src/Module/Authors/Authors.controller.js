import * as AuthorsService from "./Authors.service.js";

export const insertAuthor = (req, res) => AuthorsService.insertAuthorService(req, res);
