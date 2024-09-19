import express from "express";
import { addPolicy, getPolicy, updatePolicy, deletePolicy } from "../controllers/policy.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/add-policy",protectRoute, addPolicy);         
router.get("/get-policy/:id",protectRoute,getPolicy);      
router.put("/update-policy/:id",protectRoute,updatePolicy); 
router.delete("/delete-policy/:id",protectRoute,deletePolicy); 

export default router;
