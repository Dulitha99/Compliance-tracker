import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FiSettings } from 'react-icons/fi';

const Policies = () => {
  const [policies] = useState([
    { id: 1, title: 'Privacy Policy', content: 'Your privacy is important to us. We will never share your data.' },
    { id: 2, title: 'Terms of Service', content: 'By using our service, you agree to our terms.' },
    { id: 3, title: 'Refund Policy', content: 'Refunds are available within 30 days of purchase.' },
  ]);

  const [expanded, setExpanded] = useState(null); 

  const toggleAccordion = (policyId) => {
    setExpanded(expanded === policyId ? null : policyId);
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
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Policies</h1>

        <section className="bg-white shadow-lg rounded-lg p-6">
          
          <div className="space-y-6">
            {policies.map((policy) => (
              <div key={policy.id} className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer" 
                  onClick={() => toggleAccordion(policy.id)}
                >
                  <h3 className="font-semibold text-xl text-gray-800">{policy.title}</h3>
                  <span className="text-gray-500">{expanded === policy.id ? '-' : '+'}</span>
                </div>
                {expanded === policy.id && (
                  <div className="border-t border-gray-200 p-4">
                    <p className="text-gray-600">{policy.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Policies;
