import bcrypt from "bcryptjs";
import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { body, validationResult } from "express-validator";

// User signup controller
export const signup = [
  body("username").isAlphanumeric().withMessage("Username must be alphanumeric."),
  body("email").isEmail().withMessage("Invalid email."),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
  body("confirmPassword").custom((value, { req }) => value === req.body.password).withMessage("Passwords don't match."),
  body("gender").trim().escape(),
  body("company").notEmpty().withMessage("Company is required."),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password, gender, company, email } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        password: hashedPassword,
        gender,
        company,
        email,
      });

      if (newUser) {
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
          _id: newUser._id,
          username: newUser.username,
          company: newUser.company,  // Include company in response
        });
      } else {
        res.status(400).json({ error: "Invalid user data" });
      }
    } catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

// Admin signup controller
export const adminSignup = [
  body("username").isAlphanumeric().withMessage("Username must be alphanumeric."),
  body("email").isEmail().withMessage("Invalid email."),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
  body("confirmPassword").custom((value, { req }) => value === req.body.password).withMessage("Passwords don't match."),
  body("company").notEmpty().withMessage("Company is required."),

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

      if (newAdmin) {
        generateTokenAndSetCookie(newAdmin._id, res);
        await newAdmin.save();

        res.status(201).json({
          _id: newAdmin._id,
          username: newAdmin.username,
          email: newAdmin.email,
          company: newAdmin.company,  // Include company and email in response
        });
      } else {
        res.status(400).json({ error: "Invalid admin data" });
      }
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
      const isPasswordCorrect = await bcrypt.compare(password, admin?.password || "");

      if (!admin || !isPasswordCorrect) {
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

// User login controller
export const userLogin = [
  body("username").isAlphanumeric().withMessage("Invalid username."),
  body("password").isLength({ min: 6 }).withMessage("Invalid password."),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;
      const user = await User.findOne({ username });
      const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

      if (!user || !isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      generateTokenAndSetCookie(user._id, res);

      res.status(200).json({
        _id: user._id,
        username: user.username,
        company: user.company,  // Include company in response
      });
    } catch (error) {
      console.log("Error in user login controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

// Logout controller (common for both user and admin)
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
