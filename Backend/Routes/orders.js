import express from "express";
import Order from "../Models/order.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const orders = await Order.find();
    res.status(200).send(orders);
  });
router.get("/:id", async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.status(200).send(order);
  });
router.post("/", async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send();
  });
router.put("/:id", async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  });
router.delete("/:id", async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });

  export default router;