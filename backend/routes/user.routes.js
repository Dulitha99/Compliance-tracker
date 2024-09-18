import express from "express";
import { getAllUsers } from "../controllers/user.controller.js"; // Adjust the path if necessary

const router = express.Router();

// Route to get all users
router.get("/", getAllUsers);

export default router;
