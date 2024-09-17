import express from "express";
import { login, logout, signup, admin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/admin",admin);

export default router;