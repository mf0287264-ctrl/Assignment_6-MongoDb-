import booksModel from "../../DB/Models/books.model.js";
import logsModel from "../../DB/Models/logs.model.js";

// Q5: Insert single book
export const insertSingleBookService = async (req, res) => {
  try {
    const book = req.body;
    const result = await booksModel.insertOne(book);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q6: Insert batch books
export const insertBatchBooksService = async (req, res) => {
  try {
    const books = req.body;
    if (!Array.isArray(books) || books.length < 1) {
      return res.status(400).json({ error: "Expected array of book documents" });
    }
    const result = await booksModel.insertMany(books);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedIds: result.insertedIds,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q8: Update book year by title
export const updateBookYearByTitleService = async (req, res) => {
  try {
    const { title } = req.params;
    const { year } = req.body;
    const result = await booksModel.updateOne(
      { title },
      { $set: { year: Number(year) } }
    );
    return res.status(200).json({
      acknowledged: result.acknowledged,
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q9: Find book by title
export const findBookByTitleService = async (req, res) => {
  try {
    const title = req.query.title || "Brave New World";
    const book = await booksModel.findOne({ title });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q10: Find books by year range (e.g. 1990 - 2010)
export const findBooksByYearRangeService = async (req, res) => {
  try {
    const from = Number(req.query.from || 1990);
    const to = Number(req.query.to || 2010);
    const books = await booksModel.find({
      year: { $gte: from, $lte: to },
    }).toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q11: Find books by genre
export const findBooksByGenreService = async (req, res) => {
  try {
    const genre = req.query.genre || "Science Fiction";
    const books = await booksModel.find({ genres: genre }).toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q12: Skip 2, limit 3, sort year descending
export const skipLimitBooksService = async (req, res) => {
  try {
    const books = await booksModel
      .find()
      .sort({ year: -1 })
      .skip(2)
      .limit(3)
      .toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q13: Find books with integer year
export const findBooksByIntegerYearService = async (req, res) => {
  try {
    const books = await booksModel
      .find({
        year: { $type: "int" },
      })
      .toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q14: Find books excluding Horror or Science Fiction
export const findBooksExcludeGenresService = async (req, res) => {
  try {
    const books = await booksModel
      .find({
        genres: { $nin: ["Horror", "Science Fiction"] },
      })
      .toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q15: Delete books before year
export const deleteBooksBeforeYearService = async (req, res) => {
  try {
    const year = Number(req.query.year || 2000);
    const result = await booksModel.deleteMany({
      year: { $lt: year },
    });
    return res.status(200).json({
      acknowledged: result.acknowledged,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q16: Aggregate 1 - Filter year > 2000 & sort year descending
export const aggregate1Service = async (req, res) => {
  try {
    const books = await booksModel
      .aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $sort: { year: -1 } },
      ])
      .toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q17: Aggregate 2 - Filter year > 2000 & project title, author, year
export const aggregate2Service = async (req, res) => {
  try {
    const books = await booksModel
      .aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $project: { _id: 0, title: 1, author: 1, year: 1 } },
      ])
      .toArray();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q18: Aggregate 3 - Unwind genres array
export const aggregate3Service = async (req, res) => {
  try {
    const result = await booksModel
      .aggregate([
        { $unwind: "$genres" },
        { $project: { _id: 0, title: 1, genres: 1 } },
      ])
      .toArray();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Q19: Aggregate 4 - Join books collection with logs collection
export const aggregate4Service = async (req, res) => {
  try {
    const result = await logsModel
      .aggregate([
        {
          $lookup: {
            from: "books",
            localField: "booksId",
            foreignField: "_id",
            as: "book_details",
          },
        },
        {
          $project: {
            _id: 0,
            action: 1,
            book_details: {
              title: 1,
              author: 1,
              year: 1,
            },
          },
        },
      ])
      .toArray();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
