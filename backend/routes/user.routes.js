import express from "express";
import {getUsersByCompany } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/report", getUsersByCompany);

export default router;