import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import responseTimeMiddleware from './middleware/responseTimeMiddleware.js'

const app = express();
dotenv.config()

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.use(responseTimeMiddleware);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).
  catch((error) => console.log(error.message));
