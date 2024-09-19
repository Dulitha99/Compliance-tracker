import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">SecuTrain</a>
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="hidden lg:flex space-x-4">
            <a href="#home" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-16 px-4 lg:px-16 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
              <input
                className="form-input w-full border border-gray-300 rounded-md py-2 px-3"
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">Company</label>
              <input
                className="form-input w-full border border-gray-300 rounded-md py-2 px-3"
                id="company"
                type="text"
                placeholder="Company"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="form-input w-full border border-gray-300 rounded-md py-2 px-3"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-input w-full border border-gray-300 rounded-md py-2 px-3"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="form-input w-full border border-gray-300 rounded-md py-2 px-3"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700" type="submit">Sign Up</button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 SecuTrain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
