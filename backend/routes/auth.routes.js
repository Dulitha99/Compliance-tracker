import express from "express";
import { userLogin, logout, signup,adminSignup,adminLogin } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", userLogin);

router.post("/logout",protectRoute,logout);

router.post("/admin",adminLogin);

router.post("/adminregister",adminSignup);

export default router;