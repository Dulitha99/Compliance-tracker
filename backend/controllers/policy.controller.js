import Policy from "../models/policy.model.js";

// Create a new policy
export const addPolicy = async (req, res) => {
  const {
    policyName,
    description,
    department,
    complianceRequirements,
    effectiveDate,
    reviewDate,
    status,
    version,
  } = req.body;

  try {
    
    const existingPolicy = await Policy.findOne({ policyName });
    if (existingPolicy) {
      return res.status(400).json({ message: "Policy with this name already exists" });
    }

    // Create new policy
    const policy = new Policy({
      policyName,
      description,
      department,
      complianceRequirements,
      effectiveDate,
      reviewDate,
      status,
      version,
    });

   
    const createdPolicy = await policy.save();
    res.status(201).json(createdPolicy);
  } catch (error) {
    res.status(500).json({ message: "Failed to create policy", error: error.message });
  }
};

// Get a policy by ID
export const getPolicy = async (req, res) => {
  const { id } = req.params;

  try {
    
    const policy = await Policy.findById(id);
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve policy", error: error.message });
  }
};

// Update a policy by ID
export const updatePolicy = async (req, res) => {
  const { id } = req.params;
  const {
    policyName,
    description,
    department,
    complianceRequirements,
    effectiveDate,
    reviewDate,
    status,
    version,
  } = req.body;

  try {
    
    const existingPolicy = await Policy.findById(id);
    if (!existingPolicy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    
    existingPolicy.policyName = policyName || existingPolicy.policyName;
    existingPolicy.description = description || existingPolicy.description;
    existingPolicy.department = department || existingPolicy.department;
    existingPolicy.complianceRequirements = complianceRequirements || existingPolicy.complianceRequirements;
    existingPolicy.effectiveDate = effectiveDate || existingPolicy.effectiveDate;
    existingPolicy.reviewDate = reviewDate || existingPolicy.reviewDate;
    existingPolicy.status = status || existingPolicy.status;
    existingPolicy.version = version || existingPolicy.version;

    
    const updatedPolicy = await existingPolicy.save();
    res.status(200).json(updatedPolicy);
  } catch (error) {
    res.status(500).json({ message: "Failed to update policy", error: error.message });
  }
};

// Delete a policy by ID
export const deletePolicy = async (req, res) => {
  const { id } = req.params;

  try {
    
    const deletedPolicy = await Policy.findByIdAndDelete(id);
    if (!deletedPolicy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    res.status(200).json({ message: "Policy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete policy", error: error.message });
  }
};
