import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', userInfo);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="hover:bg-gray-700">
              <Link to="/userdashboard" className="block px-4 py-2">Trainings</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/userpolicies" className="block px-4 py-2">Policies</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/usersettings" className="block px-4 py-2">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>


      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Settings</h1>

    
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Update Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={userInfo.confirmPassword}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update Profile
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Other Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="notifications" className="mr-2" />
              <label htmlFor="notifications" className="text-gray-700">Enable Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="darkMode" className="mr-2" />
              <label htmlFor="darkMode" className="text-gray-700">Dark Mode</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-gray-700">Enable Privacy Mode</label>
            </div>
          </div>
        </section>

       
        <button onClick={handleLogout} className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Logout
        </button>
      </main>
    </div>
  );
};

export default Settings;
