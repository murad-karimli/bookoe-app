import express from "express";
import Book from "../Models/book.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.status(200).send(books);
});
router.get("/:id", async (req, res) => {
  const book = await Book.find({ _id: req.params.id });
  res.status(200).send(book);
});
router.post("/", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).send();
});
router.put("/:id", async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send();
});
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).send();
});
export default router;