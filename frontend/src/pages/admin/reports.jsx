import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Pie, Bar } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import 'chart.js/auto';

const Reports = () => {
  const [employees, setEmployees] = useState([
    {
      username: 'janeSmith456',
      email: 'jane.smith@samplemail.com',
      policyA: 'Accepted',
      policyB: 'Accepted',
      policyC: 'Not Accepted',
    },
    {
      username: 'johnDoe123',
      email: 'john.doe@samplemail.com',
      policyA: 'Accepted',
      policyB: 'Not Accepted',
      policyC: 'Accepted',
    },
    // Add more employee data here
  ]);

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  // Calculate policy acceptance
  const acceptedAllPolicies = employees.filter(
    (emp) => emp.policyA === 'Accepted' && emp.policyB === 'Accepted' && emp.policyC === 'Accepted'
  ).length;
  const notAcceptedAllPolicies = employees.length - acceptedAllPolicies;

  // Data for Pie Chart
  const pieData = {
    labels: ['Accepted All Policies', 'Not Accepted All Policies'],
    datasets: [
      {
        label: 'Policy Acceptance',
        data: [acceptedAllPolicies, notAcceptedAllPolicies],
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#EF5350'],
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: ['Policy A', 'Policy B', 'Policy C'],
    datasets: [
      {
        label: 'No. of Employees Accepted',
        data: [
          employees.filter((emp) => emp.policyA === 'Accepted').length,
          employees.filter((emp) => emp.policyB === 'Accepted').length,
          employees.filter((emp) => emp.policyC === 'Accepted').length,
        ],
        backgroundColor: '#42A5F5',
      },
    ],
  };

  // Export to PDF functionality
  const exportPDF = async () => {
    const doc = new jsPDF();

    // Create a pie chart image
    const pieChartImage = await pieChartRef.current.toBase64Image();
    doc.addImage(pieChartImage, 'PNG', 10, 10, 180, 90); // Adjust position and size

    // Create a bar chart image
    const barChartImage = await barChartRef.current.toBase64Image();
    doc.addImage(barChartImage, 'PNG', 10, 110, 180, 90); // Adjust position and size

    doc.save('charts_report.pdf');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Policy Acceptance Executive Summary Report</h1>

        {/* Export to PDF Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={exportPDF}
            className="btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Export as PDF
          </button>
        </div>

        {/* Executive Summary Content */}
        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
          <p>
            This report provides an overview of the policy acceptance rates among employees within the organization.
            The analysis covers three major policies that employees must adhere to. The data indicates a general 
            trend of acceptance, highlighting areas where further training may be beneficial.
          </p>
          <p className="mt-2">
            The organization aims for 100% policy acceptance to ensure compliance and enhance overall security. 
            This report aims to pinpoint specific policies that may require additional emphasis during training sessions.
          </p>
        </div>

        {/* Charts Section */}
        <div className="mb-6 flex justify-between space-x-4">
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Overview of Policy Acceptance</h2>
            <Pie ref={pieChartRef} data={pieData} />
          </div>

          <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Employees Policy Acceptance by Policy</h2>
            <Bar ref={barChartRef} data={barData} />
          </div>
        </div>

        {/* Employee Table */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Employee Policy Details</h2>
          <table className="table-auto w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Policy A</th>
                <th className="px-4 py-2">Policy B</th>
                <th className="px-4 py-2">Policy C</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="bg-gray-100 border-b">
                  <td className="px-4 py-2">{emp.email}</td>
                  <td className="px-4 py-2">{emp.policyA}</td>
                  <td className="px-4 py-2">{emp.policyB}</td>
                  <td className="px-4 py-2">{emp.policyC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Reports;
