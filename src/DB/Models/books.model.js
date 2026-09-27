import { db } from "../db.connection.js";

const booksModel = db.collection("books");

export default booksModel;
