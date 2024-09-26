import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import logo from '../../assets/images/logo.png'; // Add the CYBERX logo path

const Dashboard = () => {
  const [policies, setPolicies] = useState([
    {
      policyName: 'Data Privacy Policy',
      description: 'A policy outlining how data privacy is maintained.',
      department: 'IT',
      company: 'CYBERX',
      complianceRequirements: 'GDPR, CCPA',
      effectiveDate: '2024-09-01',
      reviewDate: '2025-09-01',
      status: 'Active',
      version: '1.0',
    },
    // More policies...
  ]);

  const [newPolicy, setNewPolicy] = useState({
    policyName: '',
    description: '',
    department: '',
    company: '',
    complianceRequirements: '',
    effectiveDate: '',
    reviewDate: '',
    status: '',
    version: '',
  });

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({ ...newPolicy, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPolicies([...policies, newPolicy]);
    setNewPolicy({
      policyName: '',
      description: '',
      department: '',
      company: '',
      complianceRequirements: '',
      effectiveDate: '',
      reviewDate: '',
      status: '',
      version: '',
    });
  };

  const handleDelete = (index) => {
    const updatedPolicies = policies.filter((_, i) => i !== index);
    setPolicies(updatedPolicies);
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
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

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-10 text-gray-900">Manage Policies</h1>

          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-[#1337aa] mb-6">Company Policies</h2>
            {policies.map((policy, index) => (
              <div
                key={index}
                className="mb-6 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] duration-300"
              >
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                  <h3 className="text-2xl font-bold text-gray-800">{policy.policyName}</h3>
                  <span className="text-gray-600 text-2xl">{expandedIndex === index ? '-' : '+'}</span>
                </div>
                {expandedIndex === index && (
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-700 text-lg">{policy.description}</p>
                    <p className="text-gray-600">Department: <span className="font-medium">{policy.department}</span></p>
                    <p className="text-gray-600">Company: <span className="font-medium">{policy.company}</span></p>
                    <p className="text-gray-600">Compliance Requirements: <span className="font-medium">{policy.complianceRequirements}</span></p>
                    <p className="text-gray-600">Effective Date: <span className="font-medium">{policy.effectiveDate}</span></p>
                    <p className="text-gray-600">Review Date: <span className="font-medium">{policy.reviewDate}</span></p>
                    <p className="text-gray-600">Status: <span className="font-medium">{policy.status}</span></p>
                    <p className="text-gray-600">Version: <span className="font-medium">{policy.version}</span></p>
                    <button
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-[#1337aa]">Create New Policy</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="policyName"
                placeholder="Policy Name"
                value={newPolicy.policyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newPolicy.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-28 resize-none focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={newPolicy.department}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={newPolicy.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="text"
                name="complianceRequirements"
                placeholder="Compliance Requirements"
                value={newPolicy.complianceRequirements}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="date"
                name="effectiveDate"
                value={newPolicy.effectiveDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="date"
                name="reviewDate"
                value={newPolicy.reviewDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="text"
                name="status"
                placeholder="Status"
                value={newPolicy.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <input
                type="text"
                name="version"
                placeholder="Version"
                value={newPolicy.version}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1337aa] focus:border-[#1337aa]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#06a0ff] hover:bg-[#1337aa] text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Add Policy
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
