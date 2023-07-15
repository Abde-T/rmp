import express from "express";
const router = express.Router();

import { getAllUsers, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/users", getAllUsers);


export default router;