import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FiSettings } from 'react-icons/fi';

const Policies = () => {
  const [policies, setPolicies] = useState([
    { id: 1, title: 'Privacy Policy', content: 'Your privacy is important to us. We will never share your data.' },
    { id: 2, title: 'Terms of Service', content: 'By using our service, you agree to our terms.' },
    { id: 3, title: 'Refund Policy', content: 'Refunds are available within 30 days of purchase.' },
  ]);

  const [acceptedPolicies, setAcceptedPolicies] = useState([]);
  const [error, setError] = useState('');
  const [checkedPolicies, setCheckedPolicies] = useState({});
  const [expanded, setExpanded] = useState(null); // State for managing expanded accordion

  const handleCheckboxChange = (policyId, type) => {
    setCheckedPolicies(prev => ({
      ...prev,
      [policyId]: {
        ...prev[policyId],
        [type]: !prev[policyId]?.[type],
      },
    }));
  };

  const handleAcceptPolicy = (policy) => {
    const { agree, sign } = checkedPolicies[policy.id] || {};

    if (agree && sign) {
      setAcceptedPolicies((prev) => [...prev, policy]);
      setPolicies((prev) => prev.filter((p) => p.id !== policy.id));
      setCheckedPolicies((prev) => ({ ...prev, [policy.id]: { agree: false, sign: false } }));
      setError('');
    } else {
      setError('Please check both boxes to accept this policy.');
    }
  };

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

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <section className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Accept These Policies</h2>
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
                    <div className="mt-4">
                      <div className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          id={`agree-${policy.id}`}
                          className="mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          checked={checkedPolicies[policy.id]?.agree || false}
                          onChange={() => handleCheckboxChange(policy.id, 'agree')}
                        />
                        <label htmlFor={`agree-${policy.id}`} className="text-gray-700 text-lg">I agree to this policy</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id={`sign-${policy.id}`}
                          className="mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          checked={checkedPolicies[policy.id]?.sign || false}
                          onChange={() => handleCheckboxChange(policy.id, 'sign')}
                        />
                        <label htmlFor={`sign-${policy.id}`} className="text-gray-700 text-lg">I sign this policy</label>
                      </div>
                      <button
                        onClick={() => handleAcceptPolicy(policy)}
                        className="mt-3 bg-[#1F2937] text-white px-6 py-2 rounded-lg hover:bg-[#1337aa] transition duration-200"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Accepted Policies</h2>
          <div className="space-y-6">
            {acceptedPolicies.length > 0 ? (
              acceptedPolicies.map((policy) => (
                <div key={policy.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-200">
                  <h3 className="font-semibold text-xl text-gray-800">{policy.title}</h3>
                  <p className="text-gray-600">{policy.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No policies accepted yet.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Policies;
