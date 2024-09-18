import User from "../models/user.model.js";

export const getUsersByCompany = async (req, res) => {
  try {
    const { company } = req.query;  

    if (!company) {
      return res.status(400).json({ error: "Company name is required" });
    }

    const filteredUsers = await User.find({ company }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersByCompany: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
