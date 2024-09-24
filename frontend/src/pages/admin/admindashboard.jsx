import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Dashboard = () => {
  const [policies, setPolicies] = useState([
    {
      policyName: 'Data Privacy Policy',
      description: 'A policy outlining how data privacy is maintained.',
      department: 'IT',
      complianceRequirements: 'GDPR, CCPA',
      effectiveDate: '2024-09-01',
      reviewDate: '2025-09-01',
      status: 'Active',
      version: '1.0',
    },
    // Add more dummy data as needed
  ]);

  const [newPolicy, setNewPolicy] = useState({
    policyName: '',
    description: '',
    department: '',
    complianceRequirements: '',
    effectiveDate: '',
    reviewDate: '',
    status: '',
    version: '',
  });

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

  return (
    <div className="flex min-h-screen">
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
              <Link to="/employees" className="block px-4 py-2">Employees</Link>
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
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Manage Policies</h1>
        
        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-2">Company Policies</h2>
          {policies.map((policy, index) => (
            <div key={index} className="mb-2">
              <div className="collapse border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {policy.policyName}
                </div>
                <div className="collapse-content">
                  <p className="mb-2">{policy.description}</p>
                  <p>Department: {policy.department}</p>
                  <p>Compliance Requirements: {policy.complianceRequirements}</p>
                  <p>Effective Date: {policy.effectiveDate}</p>
                  <p>Review Date: {policy.reviewDate}</p>
                  <p>Status: {policy.status}</p>
                  <p>Version: {policy.version}</p>
                  <button className="btn btn-error" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-3xl font-semibold mb-2">Create New Policy</h2>
          <input 
            type="text" 
            name="policyName" 
            placeholder="Policy Name" 
            value={newPolicy.policyName} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <textarea 
            name="description" 
            placeholder="Description" 
            value={newPolicy.description} 
            onChange={handleChange} 
            className="textarea textarea-bordered w-full h-24" 
            required 
          />
          <input 
            type="text" 
            name="department" 
            placeholder="Department" 
            value={newPolicy.department} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <input 
            type="text" 
            name="complianceRequirements" 
            placeholder="Compliance Requirements" 
            value={newPolicy.complianceRequirements} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <input 
            type="date" 
            name="effectiveDate" 
            value={newPolicy.effectiveDate} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <input 
            type="date" 
            name="reviewDate" 
            value={newPolicy.reviewDate} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <input 
            type="text" 
            name="status" 
            placeholder="Status" 
            value={newPolicy.status} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <input 
            type="text" 
            name="version" 
            placeholder="Version" 
            value={newPolicy.version} 
            onChange={handleChange} 
            className="input input-bordered w-full" 
            required 
          />
          <button type="submit" className="btn btn-primary">Add Policy</button>
        </form>
      </main>
    </div>
  );
};

export default Dashboard;
