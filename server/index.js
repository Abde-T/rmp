import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import connectDB from "./mongodb/connect.js";
import cacheMiddleware from './middleware/cacheMiddleware.js';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors({
  origin: "https://rmp-abde-t.vercel.app",
  methods:['POST', 'GET'],
  credentials: true
}));
app.use(cacheMiddleware())

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    connectDB(CONNECTION_URL);
  } catch (error) {
    console.log(error);
  }
};

startServer();
