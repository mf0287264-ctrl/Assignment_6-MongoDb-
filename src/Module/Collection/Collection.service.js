import { db } from "../../DB/db.connection.js";
import authorsModel from "../../DB/Models/authors.model.js";
import booksModel from "../../DB/Models/books.model.js";

export const createExplicitBooksCollectionService = async (req, res) => {
  try {
    const validator = req.body?.validator || {
      $jsonSchema: {
        bsonType: "object",
        required: ["title"],
        properties: {
          title: {
            bsonType: "string",
            minLength: 1,
          },
        },
      },
    };

    const collections = await db.listCollections({ name: "books" }).toArray();
    if (collections.length > 0) {
      await db.command({
        collMod: "books",
        validator,
      });
    } else {
      await db.createCollection("books", { validator });
    }

    return res.status(201).json({ ok: 1 });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createImplicitAuthorsCollectionService = async (req, res) => {
  try {
    const authorData = req.body && Object.keys(req.body).length > 0
      ? req.body
      : { name: "Author1", nationality: "British" };

    const result = await authorsModel.insertOne(authorData);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createCappedLogsCollectionService = async (req, res) => {
  try {
    const size = req.body?.size || 1048576; // 1MB
    const max = req.body?.max || 1000;

    const collections = await db.listCollections({ name: "logs" }).toArray();
    if (collections.length === 0) {
      await db.createCollection("logs", {
        capped: true,
        size,
        max,
      });
    }

    return res.status(201).json({ ok: 1 });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createBooksIndexService = async (req, res) => {
  try {
    const field = req.body?.field || "title";
    const order = req.body?.order || 1;

    const indexName = await booksModel.createIndex({ [field]: order });
    return res.status(200).json({ indexName });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
