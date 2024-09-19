import express from "express";
import { adminSignup, adminLogin, adminLogout } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/adminregister", adminSignup);
router.post("/admin", adminLogin);
router.post("/adminlogout", adminLogout); 

export default router;
