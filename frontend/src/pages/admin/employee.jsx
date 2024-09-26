import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import logo from '../../assets/images/logo.png'; // Replace with the actual path to the logo

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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Section */}
      <aside className="w-64 bg-[#1F2937] text-white shadow-md">
        <div className="p-4 flex items-center justify-center border-b border-gray-700">
          <img src={logo} alt="CYBERX Logo" className="h-24 w-24 object-contain" />
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/admindashboard" className="block px-4 py-2 text-lg font-semibold">
                Manage Policies
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/employee" className="block px-4 py-2 text-lg font-semibold">
                Employees
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/reports" className="block px-4 py-2 text-lg font-semibold">
                Reports
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/adminsettings" className="block px-4 py-2 text-lg font-semibold flex items-center">
                <FiSettings className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Employees Page Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-5xl font-bold text-gray-900">Employees List</h1>
          </div>

          {/* Employee Overview Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-[#06a0ff] text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold">Total Employees</h3>
              <p className="text-4xl font-semibold">{employees.length}</p>
            </div>
            <div className="bg-[#a7ce00] text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold">Departments</h3>
              <p className="text-4xl font-semibold">2</p>
            </div>
            <div className="bg-[#ff6b6b] text-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold">Active Roles</h3>
              <p className="text-4xl font-semibold">2</p>
            </div>
          </div>

          {/* Employees Table */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-3xl font-semibold text-[#1337aa] mb-6">Employee Details</h3>
            <table className="table-auto w-full text-left bg-white shadow-lg rounded-lg">
              <thead className="bg-[#1F2937] text-white">
                <tr>
                  <th className="px-6 py-4">Username</th>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Job Role</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100">
                    <td className="px-6 py-4">{employee.username}</td>
                    <td className="px-6 py-4">{employee.company}</td>
                    <td className="px-6 py-4">{employee.department}</td>
                    <td className="px-6 py-4">{employee.jobRole}</td>
                    <td className="px-6 py-4">{employee.email}</td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
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
              <p className="text-center text-red-600 font-semibold mt-6">No employees available.</p>
            )}
          </div>

          {/* Additional Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-[#1337aa] mb-6">Employee Insights</h3>
            <p className="text-gray-700 leading-relaxed">
              Managing your employees effectively can lead to better productivity and an improved company culture. 
              This dashboard gives you a snapshot of your employees' distribution across departments and roles.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ensure that employee information is always kept up to date and inactive employees are removed regularly 
              to maintain an accurate overview of your workforce.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Employees;
