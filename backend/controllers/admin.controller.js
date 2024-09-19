import bcrypt from "bcryptjs";
import Admin from "../models/admin.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { body, validationResult } from "express-validator";

// Admin signup controller
export const adminSignup = [
  body("username").isAlphanumeric().withMessage("Username must be alphanumeric."),
  body("email").isEmail().withMessage("Invalid email."),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
  body("confirmPassword").custom((value, { req }) => value === req.body.password).withMessage("Passwords don't match."),
  body("company.companyName").notEmpty().withMessage("Company name is required."),
  body("company.industry").notEmpty().withMessage("Industry is required."),
  body("company.location.address").notEmpty().withMessage("Address is required."),
  body("company.location.city").notEmpty().withMessage("City is required."),
  body("company.location.country").notEmpty().withMessage("Country is required."),
  body("company.location.postalCode").notEmpty().withMessage("Postal code is required."),
  body("company.establishedDate").isISO8601().withMessage("Established date must be a valid date."),
  body("company.contactInfo.email").isEmail().withMessage("Invalid contact email."),
  body("company.contactInfo.phone").notEmpty().withMessage("Phone number is required."),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, email, password, company } = req.body;

      const existingAdmin = await Admin.findOne({ username });
      if (existingAdmin) {
        return res.status(400).json({ error: "Username already exists" });
      }

      const existingEmail = await Admin.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newAdmin = new Admin({
        username,
        email,
        password: hashedPassword,
        company,
      });

      await newAdmin.save();
      generateTokenAndSetCookie(newAdmin._id, res);

      res.status(201).json({
        _id: newAdmin._id,
        username: newAdmin.username,
        email: newAdmin.email,
        company: newAdmin.company,
      });
    } catch (error) {
      console.log("Error in admin signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

// Admin login controller
export const adminLogin = [
  body("username").isAlphanumeric().withMessage("Invalid username."),
  body("password").isLength({ min: 6 }).withMessage("Invalid password."),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;
      const admin = await Admin.findOne({ username });
      if (!admin) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, admin.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      generateTokenAndSetCookie(admin._id, res);

      res.status(200).json({
        _id: admin._id,
        username: admin.username,
      });
    } catch (error) {
      console.log("Error in admin login controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

// Admin logout controller
export const adminLogout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Admin logged out successfully" });
  } catch (error) {
    console.log("Error in admin logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
