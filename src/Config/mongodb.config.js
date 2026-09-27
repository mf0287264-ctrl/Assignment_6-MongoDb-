import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
export const db = client.db("Assignment7");

export const database_connect = async () => {
  try {
    await client.connect();
    console.log("Database connected");
  } catch (error) {
    console.log("DB connection error", error);
  }
};
