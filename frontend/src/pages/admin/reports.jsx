import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Bar } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import 'chart.js/auto';
import logo from '../../assets/images/logo.png';

const Reports = () => {
  const [employees, setEmployees] = useState([
    {
      username: 'janeSmith456',
      department: 'Engineering',
      email: 'jane.smith@samplemail.com',
      policyA: 'Accepted',
      policyB: 'Accepted',
      policyC: 'Not Accepted',
    },
    {
      username: 'johnDoe123',
      department: 'Marketing',
      email: 'john.doe@samplemail.com',
      policyA: 'Accepted',
      policyB: 'Not Accepted',
      policyC: 'Accepted',
    },
    {
      username: 'lindaTech98',
      department: 'Engineering',
      email: 'linda.tech@samplemail.com',
      policyA: 'Accepted',
      policyB: 'Accepted',
      policyC: 'Accepted',
    },
    {
      username: 'markSmith654',
      department: 'Finance',
      email: 'mark.smith@samplemail.com',
      policyA: 'Not Accepted',
      policyB: 'Accepted',
      policyC: 'Accepted',
    },
  ]);

  const barChartRef1 = useRef(null);
  const barChartRef2 = useRef(null);
  const barChartRef3 = useRef(null);
  const barChartRef4 = useRef(null);

  const policyAcceptanceData = {
    labels: ['Policy A', 'Policy B', 'Policy C'],
    datasets: [
      {
        label: 'No. of Employees Accepted',
        data: [
          employees.filter((emp) => emp.policyA === 'Accepted').length,
          employees.filter((emp) => emp.policyB === 'Accepted').length,
          employees.filter((emp) => emp.policyC === 'Accepted').length,
        ],
        backgroundColor: '#06a0ff',
      },
    ],
  };

  const departmentEmployeeData = {
    labels: ['Engineering', 'Marketing', 'Finance'],
    datasets: [
      {
        label: 'No. of Employees',
        data: [
          employees.filter((emp) => emp.department === 'Engineering').length,
          employees.filter((emp) => emp.department === 'Marketing').length,
          employees.filter((emp) => emp.department === 'Finance').length,
        ],
        backgroundColor: '#FFCE56',
      },
    ],
  };

  const departmentPolicyData = {
    labels: ['Engineering', 'Marketing', 'Finance'],
    datasets: [
      {
        label: 'No. of Policies Accepted',
        data: [
          employees.filter((emp) => emp.policyA === 'Accepted' && emp.policyB === 'Accepted' && emp.policyC === 'Accepted' && emp.department === 'Engineering').length,
          employees.filter((emp) => emp.policyA === 'Accepted' && emp.policyB === 'Accepted' && emp.policyC === 'Accepted' && emp.department === 'Marketing').length,
          employees.filter((emp) => emp.policyA === 'Accepted' && emp.policyB === 'Accepted' && emp.policyC === 'Accepted' && emp.department === 'Finance').length,
        ],
        backgroundColor: '#66BB6A',
      },
    ],
  };

  const departmentComplianceData = {
    labels: ['Engineering', 'Marketing', 'Finance'],
    datasets: [
      {
        label: 'Compliance Rate (%)',
        data: [
          (employees.filter((emp) => emp.department === 'Engineering' && emp.policyA === 'Accepted').length / employees.length) * 100,
          (employees.filter((emp) => emp.department === 'Marketing' && emp.policyA === 'Accepted').length / employees.length) * 100,
          (employees.filter((emp) => emp.department === 'Finance' && emp.policyA === 'Accepted').length / employees.length) * 100,
        ],
        backgroundColor: '#FFA726',
      },
    ],
  };

  const exportPDF = async () => {
    const doc = new jsPDF();

    const barChartImage1 = await barChartRef1.current.toBase64Image();
    doc.addImage(barChartImage1, 'PNG', 10, 10, 180, 80);

    const barChartImage2 = await barChartRef2.current.toBase64Image();
    doc.addImage(barChartImage2, 'PNG', 10, 100, 180, 80);

    const barChartImage3 = await barChartRef3.current.toBase64Image();
    doc.addImage(barChartImage3, 'PNG', 10, 190, 180, 80);

    const barChartImage4 = await barChartRef4.current.toBase64Image();
    doc.addImage(barChartImage4, 'PNG', 10, 280, 180, 80);

    doc.save('charts_report.pdf');
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
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Policy Acceptance Executive Summary Report</h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={exportPDF}
            className="bg-[#06a0ff] hover:bg-[#1337aa] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
          >
            Export as PDF
          </button>
        </div>

        <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-[#1337aa] mb-4">Executive Summary</h2>
          <p>
            This report provides a detailed analysis of employee policy acceptance and compliance across departments. 
            It identifies trends and highlights areas that may need more focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="w-full bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Employees Accepted Policies</h2>
            <Bar ref={barChartRef1} data={policyAcceptanceData} />
          </div>

          <div className="w-full bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Department - No. of Employees</h2>
            <Bar ref={barChartRef2} data={departmentEmployeeData} />
          </div>

          <div className="w-full bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Department - Policies Accepted</h2>
            <Bar ref={barChartRef3} data={departmentPolicyData} />
          </div>

          <div className="w-full bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">Department - Compliance Rate</h2>
            <Bar ref={barChartRef4} data={departmentComplianceData} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold text-[#1337aa] mb-4">Employee Policy Details</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-[#1F2937] text-white">
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Policy A</th>
                <th className="px-4 py-2">Policy B</th>
                <th className="px-4 py-2">Policy C</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{employee.email}</td>
                  <td className="px-4 py-2">{employee.username}</td>
                  <td className="px-4 py-2">{employee.department}</td>
                  <td className="px-4 py-2">{employee.policyA}</td>
                  <td className="px-4 py-2">{employee.policyB}</td>
                  <td className="px-4 py-2">{employee.policyC}</td>
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
