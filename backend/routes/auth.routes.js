import express from "express";
import { userLogin, logout, signup, adminLogin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", userLogin);

router.post("/logout", logout);

router.post("/admin",adminLogin);

export default router;