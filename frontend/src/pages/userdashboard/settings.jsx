import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FiSettings } from 'react-icons/fi';
import useUserLogout from '../../hooks/useUserLogout'; 
import useUserDetails from '../../hooks/getUserDetails'; 

const Settings = () => {
  const { loading, logout } = useUserLogout(); 
  const { userDetails, loading: detailsLoading } = useUserDetails(); 

  const handleLogout = async () => {
    await logout(); 
  };

  
  if (detailsLoading) {
    return <div>Loading user details...</div>; 
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-[#1F2937] text-white shadow-md">
        <div className="p-4 flex items-center justify-center border-b border-gray-700">
          <img src={logo} alt="CYBERX Logo" className="h-24 w-24 object-contain" />
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/userdashboard" className="block px-4 py-2 text-lg font-semibold">
                Trainings
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/userpolicies" className="block px-4 py-2 text-lg font-semibold">
                Policies
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/usersettings" className="block px-4 py-2 text-lg font-semibold flex items-center">
                <FiSettings className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">User Settings</h1>

        <section className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">User Information</h2>
          <div className="space-y-4">
            <div>
              <span className="font-medium text-gray-700">Username:</span>
              <p className="text-gray-600">{userDetails?.username}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Company:</span>
              <p className="text-gray-600">{userDetails?.company}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Job Role:</span>
              <p className="text-gray-600">{userDetails?.jobRole}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Email:</span>
              <p className="text-gray-600">{userDetails?.email}</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Department:</span>
              <p className="text-gray-600">{userDetails?.department}</p>
            </div>
          </div>
        </section>

        <button 
          onClick={handleLogout} 
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" 
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Logging out..." : "Logout"} {/* Show loading text while logging out */}
        </button>
      </main>
    </div>
  );
};

export default Settings;
