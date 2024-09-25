import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      username: 'janeSmith456',
      company: 'InnovateLtd',
      department: 'Engineering',
      jobRole: 'Software Engineer',
      email: 'jane.smith@samplemail.com',
    },
    {
      username: 'johnDoe789',
      company: 'Tech Innovators',
      department: 'Marketing',
      jobRole: 'Marketing Manager',
      email: 'john.doe@samplemail.com',
    },
  ]);

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Section */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="hover:bg-gray-700">
              <Link to="/admindashboard" className="block px-4 py-2">Manage Policies</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/employee" className="block px-4 py-2">Employees</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/reports" className="block px-4 py-2">Reports</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/adminsettings" className="block px-4 py-2 flex items-center">
                <FiSettings className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Employees Page Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-bold">Employees List</h2>
        </div>

        {/* Employee Overview Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold">Total Employees</h3>
            <p className="text-2xl font-semibold">{employees.length}</p>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold">Departments</h3>
            <p className="text-2xl font-semibold">2</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold">Active Roles</h3>
            <p className="text-2xl font-semibold">2</p>
          </div>
        </div>

        {/* Employees Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Employee Details</h3>
          <table className="table-auto w-full bg-white shadow-lg rounded-lg mb-6">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Job Role</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{employee.username}</td>
                  <td className="px-4 py-2">{employee.company}</td>
                  <td className="px-4 py-2">{employee.department}</td>
                  <td className="px-4 py-2">{employee.jobRole}</td>
                  <td className="px-4 py-2">{employee.email}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {employees.length === 0 && (
            <p className="text-center text-red-600 font-semibold">No employees available.</p>
          )}
        </div>

        {/* Additional Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold mb-4">Employee Insights</h3>
          <p>
            Managing your employees effectively can lead to better productivity and improved company culture.
            The data provided here gives you an overview of the roles and departments within your organization.
          </p>
          <p className="mt-4">
            Ensure you keep your employee information up-to-date and remove inactive employees regularly to
            maintain accurate records.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Employees;
