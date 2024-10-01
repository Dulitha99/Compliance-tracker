import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../assets/images/logo.png';
import useUserLogin from '../../hooks/useLogin';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const { loading, login } = useUserLogin();
  const navigate = useNavigate(); // Initialize useNavigate
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(newErrors).length === 0) {
      // Call the login function from useUserLogin hook
      const user = await login(formData.username, formData.password);
      if (user) {
        // Redirect to user dashboard after successful login
        navigate('/userdashboard');
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg">
        <div className="w-1/2 bg-gray-900 text-white flex justify-center items-center p-8">
          <div className="text-center">
            <Link to="/">
              <img src={logo} alt="CyberX Logo" className="w-48 h-48 mx-auto" />
            </Link>
          </div>
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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

            <div className="mb-6">
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

            <button 
              className={`bg-blue-800 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-900 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="mt-6 text-center">
              <p>Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Register here</Link></p>
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

export default Login;
