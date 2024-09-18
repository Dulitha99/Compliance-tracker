import mongoose from "mongoose";

const policySchema = mongoose.Schema(
  {
    policyName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    complianceRequirements: {
      type: [String], 
      required: true,
    },
    effectiveDate: {
      type: Date,
      required: true,
    },
    reviewDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Pending Review"],
      default: "Active",
    },
    version: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Policy = mongoose.model("Policy", policySchema);

export default Policy;
