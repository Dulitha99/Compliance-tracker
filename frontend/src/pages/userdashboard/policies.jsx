import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Policies = () => {
  const [policies, setPolicies] = useState([
    { id: 1, title: 'Privacy Policy', content: 'Your privacy is important to us. We will never share your data.' },
    { id: 2, title: 'Terms of Service', content: 'By using our service, you agree to our terms.' },
    { id: 3, title: 'Refund Policy', content: 'Refunds are available within 30 days of purchase.' },
  ]);

  const [acceptedPolicies, setAcceptedPolicies] = useState([]);
  const [error, setError] = useState('');
  

  const [checkedPolicies, setCheckedPolicies] = useState({});

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

  return (
    <div className="flex min-h-screen">
     
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="hover:bg-gray-700">
              <Link to="/userdashboard" className="block px-4 py-2">Trainings</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/userpolicies" className="block px-4 py-2">Policies</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/usersettings" className="block px-4 py-2">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

     
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Policies</h1>

      
        {error && <p className="text-red-600 mb-4">{error}</p>}

       
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Accept These Policies</h2>
          <div className="space-y-4">
            {policies.map((policy) => (
              <div key={policy.id} className="border border-gray-300 rounded p-4">
                <h3 className="font-semibold">{policy.title}</h3>
                <p>{policy.content}</p>
                <div className="mt-2">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`agree-${policy.id}`}
                      className="mr-2"
                      checked={checkedPolicies[policy.id]?.agree || false}
                      onChange={() => handleCheckboxChange(policy.id, 'agree')}
                    />
                    <label htmlFor={`agree-${policy.id}`} className="text-gray-700">I agree to this policy</label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id={`sign-${policy.id}`}
                      className="mr-2"
                      checked={checkedPolicies[policy.id]?.sign || false}
                      onChange={() => handleCheckboxChange(policy.id, 'sign')}
                    />
                    <label htmlFor={`sign-${policy.id}`} className="text-gray-700">I sign this policy</label>
                  </div>
                  <button
                    onClick={() => handleAcceptPolicy(policy)}
                    className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Accepted Policies</h2>
          <div className="space-y-4">
            {acceptedPolicies.length > 0 ? (
              acceptedPolicies.map((policy) => (
                <div key={policy.id} className="border border-gray-300 rounded p-4">
                  <h3 className="font-semibold">{policy.title}</h3>
                  <p>{policy.content}</p>
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
