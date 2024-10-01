import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { body, validationResult } from "express-validator";

export const signup = [
  body("username").isAlphanumeric().withMessage("Username must be alphanumeric."),
  body("email").isEmail().withMessage("Invalid email."),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
  body("confirmPassword").custom((value, { req }) => value === req.body.password).withMessage("Passwords don't match."),
  body("company").notEmpty().withMessage("Company is required."),
  body("jobRole").notEmpty().withMessage("Job role is required."),
  body("department").notEmpty().withMessage("Department is required."),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password, company, email, jobRole, department } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        password: hashedPassword,
        company,
        email,
        jobRole,
        department,
      });

      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        company: newUser.company,
        jobRole: newUser.jobRole,
        department: newUser.department,
      });
    } catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

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
      if (!user) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      generateTokenAndSetCookie(user._id, res);

      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        company: user.company,
        jobRole: user.jobRole,
        department: user.department,
      });
    } catch (error) {
      console.log("Error in user login controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

export const userLogout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log("Error in user logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
