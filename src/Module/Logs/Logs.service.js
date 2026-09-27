import { ObjectId } from "mongodb";
import logsModel from "../../DB/Models/logs.model.js";

// Q7: Insert new log
export const insertLogService = async (req, res) => {
  try {
    const { action, booksId, book_id, timestamp } = req.body;
    const targetBookId = booksId || book_id;

    const logDoc = {
      action: action || "borrowed",
      booksId: ObjectId.isValid(targetBookId)
        ? new ObjectId(targetBookId)
        : targetBookId,
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    };

    const result = await logsModel.insertOne(logDoc);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
