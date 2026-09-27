import { db } from "../connection.js";

const authorsModel = db.collection("authors");
authorsModel.createIndex();

export default authorsModel;
