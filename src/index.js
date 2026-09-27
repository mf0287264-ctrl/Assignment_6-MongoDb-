import express from "express";
import { database_connect } from "./Config/mongodb.config.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "route is working" });
});

database_connect();
app.use((req, res) => {
  res.status(404).json({ message: "rout not found" });
});
app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(3000, () => {
  console.log("app is working on port 3000");
});
