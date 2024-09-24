import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    
    if (Object.keys(newErrors).length === 0) {
      // If no errors, submit the form (here you can call your login API)
      console.log('Form submitted:', { username: username.trim(), password: password.trim() });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">CyberX</a>
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
      
      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
              <input
                className={`form-input w-full ${errors.username ? 'border-red-500' : ''}`}
                id="username"
                type="text"
                placeholder="Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value.trim())}
                required
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className={`form-input w-full ${errors.password ? 'border-red-500' : ''}`}
                id="password"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                required
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <button className="btn btn-neutral w-full py-2" type="submit">Login</button>
            <p className="text-center mt-4">
              Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
