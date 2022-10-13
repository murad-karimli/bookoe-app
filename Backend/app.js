import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import UserRoutes from "./Routes/user.js";
import OrderRoutes from "./Routes/orders.js";
import BookRoutes from "./Routes/books.js";
const app = express();

const CONNECTION_STRING = `mongodb+srv://murka:98534993@cluster0.opzf2y6.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(CONNECTION_STRING, (err) => {
    if (err) return err
    console.log("Connected to DB successfully!")
})


app.use(cors({ origin: '*' }));
app.use(express.json());
app.use("/api/v1/orders", OrderRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/books", BookRoutes);


app.listen(3000)

