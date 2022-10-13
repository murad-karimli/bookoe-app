
import { MongoClient } from "mongodb";

const CONNECTION_STRING = `mongodb+srv://murka:98534993@cluster0.opzf2y6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(CONNECTION_STRING)

client.connect(async (err) => {
  if (err) return (err)

  console.log("Connected to DB successfully");

  const db = client.db("test")
  const collection = db.collection("bookstore");
  const bookList = await collection.find({}).toArray();
  console.log(bookList)

})

