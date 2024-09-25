import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    company: '',
    jobRole: '',
    department: '',
    password: '',
    confirmPassword: '',
    email: ''
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

    // Form validation logic
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.company) {
      newErrors.company = 'Company is required';
    }
    if (!formData.jobRole) {
      newErrors.jobRole = 'Job Role is required';
    }
    if (!formData.department) {
      newErrors.department = 'Department is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg">
        {/* Left Side (Logo Section) */}
        <div className="w-1/2 bg-gray-900 text-white flex justify-center items-center p-8">
          <div className="text-center">
            <Link to="/">
              <img src={logo} alt="CyberX Logo" className="w-48 h-48 mx-auto" />
            </Link>
          </div>
        </div>

        {/* Right Side (Signup Form Section) */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {/* First Row: Username and Company */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                  placeholder="Your Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>

              <div className="w-1/2">
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  className={`border ${errors.company ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>
            </div>

            {/* Second Row: Job Role and Department */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="jobRole" className="block text-gray-700 font-medium mb-2">Job Role</label>
                <input
                  type="text"
                  id="jobRole"
                  className={`border ${errors.jobRole ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                  placeholder="Your Job Role"
                  value={formData.jobRole}
                  onChange={handleChange}
                  required
                />
                {errors.jobRole && <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>}
              </div>

              <div className="w-1/2">
                <label htmlFor="department" className="block text-gray-700 font-medium mb-2">Department</label>
                <input
                  type="text"
                  id="department"
                  className={`border ${errors.department ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                  placeholder="Your Department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
                {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
              </div>
            </div>

            {/* Third Row: Password and Confirm Password */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="w-1/2">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Fourth Row: Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} w-full p-3 rounded-lg focus:outline-none focus:border-indigo-500`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Submit Button */}
            <button className="bg-blue-800 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-900">Sign Up</button>

            <div className="mt-6 text-center">
              <p>Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
            </div>

            <div className="mt-4 text-center">
              <p>Want to go back? <Link to="/" className="text-blue-600 hover:underline">Home</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
