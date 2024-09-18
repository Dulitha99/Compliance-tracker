import express from "express";
import { addPolicy, getPolicy, updatePolicy, deletePolicy } from "../controllers/policy.controller.js";

const router = express.Router();

router.post("/add-policy", addPolicy);         
router.get("/get-policy/:id", getPolicy);      
router.put("/update-policy/:id", updatePolicy); 
router.delete("/delete-policy/:id", deletePolicy); 

export default router;
