import User from "../models/user.model.js"; // Adjust the path if necessary

// Function to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
