import express from "express";
import { getAllUsers } from "../controllers/user.controller.js"; // Adjust the path if necessary
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// Route to get all users
router.get("/",protectRoute,getAllUsers);

export default router;
