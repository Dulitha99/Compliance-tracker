import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminUsername: '',
    adminPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.adminUsername) {
      newErrors.adminUsername = 'Admin Username is required';
    }
    if (!formData.adminPassword) {
      newErrors.adminPassword = 'Admin Password is required';
    } else if (formData.adminPassword.length < 6) {
      newErrors.adminPassword = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Admin Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-white flex justify-center items-center p-8">
          <div className="text-center">
            <Link to="/">
              <img src={logo} alt="CyberX Logo" className="w-48 h-48 mx-auto" />
            </Link>
            <h2 className="text-2xl font-bold mt-4">Admin Login</h2>
          </div>
        </div>

        <div className="w-1/2 bg-gray-900 text-white p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="adminUsername" className="block font-semibold">Admin Username</label>
              <input
                type="text"
                id="adminUsername"
                className={`border ${errors.adminUsername ? 'border-red-500' : 'border-gray-300'} bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500`}
                placeholder="Admin Username"
                value={formData.adminUsername}
                onChange={handleChange}
                required
              />
              {errors.adminUsername && <p className="text-red-500 text-sm mt-1">{errors.adminUsername}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="adminPassword" className="block font-semibold">Admin Password</label>
              <input
                type="password"
                id="adminPassword"
                className={`border ${errors.adminPassword ? 'border-red-500' : 'border-gray-300'} bg-gray-800 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500`}
                placeholder="Admin Password"
                value={formData.adminPassword}
                onChange={handleChange}
                required
              />
              {errors.adminPassword && <p className="text-red-500 text-sm mt-1">{errors.adminPassword}</p>}
            </div>

            <button className="bg-[#1F2937] text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-200">Login</button>

            <div className="mt-6 text-center">
              <p>Need help? <Link to="/support" className="text-blue-600 hover:underline">Contact Support</Link></p>
            </div>

            <div className="mt-4 text-center">
              <p>Go back? <Link to="/" className="text-blue-600 hover:underline">Home</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
