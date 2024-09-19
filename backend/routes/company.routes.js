import express from "express";
import { registerCompany, getCompanyByName } from "../controllers/company.controller.js";

const router = express.Router();

router.post("/register", registerCompany);
router.get("/company", getCompanyByName);

export default router;
