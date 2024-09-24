import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Import the logout icon

const Dashboard = () => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logged out');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="hover:bg-gray-700">
              <Link to="/manage-policies" className="block px-4 py-2">Manage Policies</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/employees" className="block px-4 py-2">Employees</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/reports" className="block px-4 py-2">Reports</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/settings" className="block px-4 py-2">Settings</Link>
            </li>
          </ul>
        </nav>
        <button 
          onClick={handleLogout} 
          className="absolute bottom-4 left-4 flex items-center bg-red-600 text-white px-4 py-2 rounded"
        >
          <FiLogOut className="mr-2" /> Logout
        </button>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
