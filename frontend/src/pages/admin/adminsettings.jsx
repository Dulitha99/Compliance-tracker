import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Settings = () => {
  const adminDetails = {
    username: "adminUser123",
    email: "admin@example.com",
    company: {
      companyName: "Tech Innovations Ltd.",
      industry: "Technology",
      location: {
        address: "123 Tech Street",
        city: "Melbourne",
        state: "VIC",
        country: "Australia",
        postalCode: "3000"
      },
      employeesCount: 50,
      establishedDate: "2015-06-15",
      contactInfo: {
        email: "contact@techinnovations.com",
        phone: "+61 123 456 789"
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Details</h2>
      <div className="space-y-4">
        <p><strong>Username:</strong> {adminDetails.username}</p>
        <p><strong>Email:</strong> {adminDetails.email}</p>
        <h3 className="font-bold">Company Information</h3>
        <p><strong>Company Name:</strong> {adminDetails.company.companyName}</p>
        <p><strong>Industry:</strong> {adminDetails.company.industry}</p>
        <p><strong>Location:</strong> {`${adminDetails.company.location.address}, ${adminDetails.company.location.city}, ${adminDetails.company.location.state}, ${adminDetails.company.location.country} - ${adminDetails.company.location.postalCode}`}</p>
        <p><strong>Employees Count:</strong> {adminDetails.company.employeesCount}</p>
        <p><strong>Established Date:</strong> {adminDetails.company.establishedDate}</p>
        <h3 className="font-bold">Contact Information</h3>
        <p><strong>Email:</strong> {adminDetails.company.contactInfo.email}</p>
        <p><strong>Phone:</strong> {adminDetails.company.contactInfo.phone}</p>
      </div>
      <Link to="/logout" className="mt-6 inline-block bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </Link>
    </div>
  );
};

export default Settings;
