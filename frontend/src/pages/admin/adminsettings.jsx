import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import useLogout from '../../hooks/useUserLogout'; 

const Settings = () => {
  const { loading, logout } = useLogout(); 
  const adminDetails = {
    username: "adminUser123",
    email: "admin@example.com",
    company: {
      companyName: "Tech Innovations Ltd.",
      industry: "Technology",
      location: {
        address: "123 Tech Street",
        city: "Melbourne",
        state: "VIC",
        country: "Australia",
        postalCode: "3000"
      },
      employeesCount: 50,
      establishedDate: "2015-06-15",
      contactInfo: {
        email: "contact@techinnovations.com",
        phone: "+61 123 456 789"
      }
    }
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

    
      <main className="flex-1 p-8 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#1337aa]">Admin Details</h2>
          <div className="space-y-4">
            <p className="text-lg"><strong>Username:</strong> {adminDetails.username}</p>
            <p className="text-lg"><strong>Email:</strong> {adminDetails.email}</p>
            <h3 className="font-bold text-xl mt-4">Company Information</h3>
            <p className="text-lg"><strong>Company Name:</strong> {adminDetails.company.companyName}</p>
            <p className="text-lg"><strong>Industry:</strong> {adminDetails.company.industry}</p>
            <p className="text-lg"><strong>Location:</strong> {`${adminDetails.company.location.address}, ${adminDetails.company.location.city}, ${adminDetails.company.location.state}, ${adminDetails.company.location.country} - ${adminDetails.company.location.postalCode}`}</p>
            <p className="text-lg"><strong>Employees Count:</strong> {adminDetails.company.employeesCount}</p>
            <p className="text-lg"><strong>Established Date:</strong> {adminDetails.company.establishedDate}</p>
            <h3 className="font-bold text-xl mt-4">Contact Information</h3>
            <p className="text-lg"><strong>Email:</strong> {adminDetails.company.contactInfo.email}</p>
            <p className="text-lg"><strong>Phone:</strong> {adminDetails.company.contactInfo.phone}</p>
          </div>
          <button 
            onClick={logout} 
            disabled={loading} 
            className={`mt-6 inline-block ${loading ? 'bg-gray-600' : 'bg-red-600'} text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300`}
          >
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
