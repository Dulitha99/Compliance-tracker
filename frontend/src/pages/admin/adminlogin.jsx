import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
      
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">SecuTrain</a>
          <div className="hidden lg:flex space-x-4">
            <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
          </div>
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      <br/>

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-11/12 md:w-9/12 lg:w-8/12 flex shadow-lg rounded-lg bg-white">
          
          {/* Left side - Admin Details */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Admin Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded border-blue-500 bg-blue-100"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded border-blue-500 bg-blue-100"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded border-blue-500 bg-blue-100"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded border-blue-500 bg-blue-100"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </form>
          </div>
          
          {/* Right side - Company Details */}
          <div className="w-1/2 p-8 bg-blue-700 text-white">
            <h2 className="text-2xl font-bold mb-6">Company Information</h2>
            <div className="mb-4">
              <label htmlFor="companyName" className="block font-semibold">Company Name</label>
              <input
                id="companyName"
                type="text"
                name="company.companyName"
                value={formData.company.companyName}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="industry" className="block font-semibold">Industry</label>
              <input
                id="industry"
                type="text"
                name="company.industry"
                value={formData.company.industry}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                placeholder="Industry"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold">Address</label>
              <input
                id="address"
                type="text"
                name="company.location.address"
                value={formData.company.location.address}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                placeholder="Company Address"
                required
              />
            </div>
            <div className="mb-4 flex space-x-2">
              <div className="w-1/2">
                <label htmlFor="city" className="block font-semibold">City</label>
                <input
                  id="city"
                  type="text"
                  name="company.location.city"
                  value={formData.company.location.city}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                  placeholder="City"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="state" className="block font-semibold">State</label>
                <input
                  id="state"
                  type="text"
                  name="company.location.state"
                  value={formData.company.location.state}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                  placeholder="State"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex space-x-2">
              <div className="w-1/2">
                <label htmlFor="country" className="block font-semibold">Country</label>
                <input
                  id="country"
                  type="text"
                  name="company.location.country"
                  value={formData.company.location.country}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                  placeholder="Country"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="postalCode" className="block font-semibold">Postal Code</label>
                <input
                  id="postalCode"
                  type="text"
                  name="company.location.postalCode"
                  value={formData.company.location.postalCode}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                  placeholder="Postal Code"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex space-x-2">
              <div className="w-1/2">
                <label htmlFor="employeesCount" className="block font-semibold">Employees Count</label>
                <input
                  id="employeesCount"
                  type="number"
                  name="company.employeesCount"
                  value={formData.company.employeesCount}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                  placeholder="No. of Employees"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="establishedDate" className="block font-semibold">Established Date</label>
                <input
                  id="establishedDate"
                  type="date"
                  name="company.establishedDate"
                  value={formData.company.establishedDate}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input
                id="email"
                type="email"
                name="company.contactInfo.email"
                value={formData.company.contactInfo.email}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                placeholder="Company Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold">Phone Number</label>
              <input
                id="phone"
                type="text"
                name="company.contactInfo.phone"
                value={formData.company.contactInfo.phone}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded bg-blue-600 border-blue-400"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Register Button */}
            <div className="mb-6">
              <button
                type="submit"
                className="btn btn-neutral w-full py-2"
              >
                Register
              </button>
            </div>

            {/* Already have an account link */}
            <div className="text-center">
              <p className="text-white">
                Already have an account?{' '}
                <Link to="/admin" className="text-yellow-400 underline">
                  Login here
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
