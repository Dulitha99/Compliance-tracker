import express from "express";
import { userLogin, userLogout, signup } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", userLogin);

router.post("/logout",protectRoute,userLogout);



export default router;