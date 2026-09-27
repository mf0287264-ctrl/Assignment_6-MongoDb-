import * as CollectionService from "./Collection.service.js";

export const createExplicitBooksCollection = (req, res) => {
  return CollectionService.createExplicitBooksCollectionService(req, res);
};

export const createImplicitAuthorsCollection = (req, res) => {
  return CollectionService.createImplicitAuthorsCollectionService(req, res);
};

export const createCappedLogsCollection = (req, res) => {
  return CollectionService.createCappedLogsCollectionService(req, res);
};

export const createBooksIndex = (req, res) => {
  return CollectionService.createBooksIndexService(req, res);
};
