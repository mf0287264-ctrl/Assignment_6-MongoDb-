import express from "express";
import { database_connect } from "./Config/mongodb.config.js";
import collectionRouter from "./Module/Collection/Collection.routes.js";
import booksRouter from "./Module/Books/Books.routes.js";
import logsRouter from "./Module/Logs/Logs.routes.js";
import authorsRouter from "./Module/Authors/Authors.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "route is working" });
});

app.use("/collection", collectionRouter);
app.use("/books", booksRouter);
app.use("/logs", logsRouter);
app.use("/authors", authorsRouter);

database_connect();

app.use((req, res) => {
  res.status(404).json({ message: "route not found" });
});

app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
