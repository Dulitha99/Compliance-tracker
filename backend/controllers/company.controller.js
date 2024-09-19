import Company from "../models/company.model.js"; 

export const registerCompany = async (req, res) => {
  const {
    companyName,
    industry,
    location,
    employeesCount,
    establishedDate,
    contactInfo,
  } = req.body;

  try {
    const companyExists = await Company.findOne({
      $or: [{ companyName }, { "contactInfo.email": contactInfo.email }],
    });

    if (companyExists) {
      return res.status(400).json({ message: "Company already exists" });
    }

    const company = new Company({
      companyName,
      industry,
      location,
      employeesCount,
      establishedDate,
      contactInfo,
    });

    const createdCompany = await company.save();
    res.status(201).json(createdCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// Controller function to get a company by its name using query parameter
export const getCompanyByName = async (req, res) => {
    const { name } = req.query; // Extract 'name' from query parameters
  
    try {
      const company = await Company.findOne({ companyName: name });
  
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }
  
      res.status(200).json(company);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
