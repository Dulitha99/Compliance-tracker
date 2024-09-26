import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: {
      companyName: '',
      industry: '',
      location: {
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
      },
      employeesCount: '',
      establishedDate: '',
      contactInfo: {
        email: '',
        phone: ''
      }
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('company')) {
      const keys = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        company: {
          ...prevState.company,
          [keys[1]]: value
        }
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Left Side - Admin Details */}
        <div className="w-1/2 p-8">
          <div className="text-center mb-6">
            <img src={logo} alt="CyberX Logo" className="w-48 h-48 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Admin Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="bg-blue-800 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-900"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center">
            <p>Already have an account? <Link to="/admin" className="text-blue-600 hover:underline">Login here</Link>.</p>
          </div>
        </div>

        {/* Right Side - Company Details */}
        <div className="w-1/2 bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Company Information</h2>
          <div className="mb-4">
            <label htmlFor="companyName" className="block font-semibold">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="company.companyName"
              className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Company Name"
              value={formData.company.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="industry" className="block font-semibold">Industry</label>
            <input
              type="text"
              id="industry"
              name="company.industry"
              className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Industry"
              value={formData.company.industry}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-semibold">Address</label>
            <input
              type="text"
              id="address"
              name="company.location.address"
              className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Company Address"
              value={formData.company.location.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label htmlFor="city" className="block font-semibold">City</label>
              <input
                type="text"
                id="city"
                name="company.location.city"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="City"
                value={formData.company.location.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="state" className="block font-semibold">State</label>
              <input
                type="text"
                id="state"
                name="company.location.state"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="State"
                value={formData.company.location.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label htmlFor="country" className="block font-semibold">Country</label>
              <input
                type="text"
                id="country"
                name="company.location.country"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Country"
                value={formData.company.location.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="postalCode" className="block font-semibold">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="company.location.postalCode"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Postal Code"
                value={formData.company.location.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label htmlFor="employeesCount" className="block font-semibold">Number of Employees</label>
              <input
                type="number"
                id="employeesCount"
                name="company.employeesCount"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Number of Employees"
                value={formData.company.employeesCount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="establishedDate" className="block font-semibold">Established Date</label>
              <input
                type="date"
                id="establishedDate"
                name="company.establishedDate"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.company.establishedDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label htmlFor="contactEmail" className="block font-semibold">Contact Email</label>
              <input
                type="email"
                id="contactEmail"
                name="company.contactInfo.email"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Contact Email"
                value={formData.company.contactInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="contactPhone" className="block font-semibold">Contact Phone</label>
              <input
                type="tel"
                id="contactPhone"
                name="company.contactInfo.phone"
                className="border border-blue-400 bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Contact Phone"
                value={formData.company.contactInfo.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
