import authorsModel from "../../DB/Models/authors.model.js";

export const insertAuthorService = async (req, res) => {
  try {
    const author = req.body;
    const result = await authorsModel.insertOne(author);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
