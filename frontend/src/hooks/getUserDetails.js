import { useState, useEffect } from 'react';

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
  
        const userData = JSON.parse(localStorage.getItem('user')) || {
          username: 'defaultUser',
          company: 'defaultCompany',
          jobRole: 'defaultRole',
          email: 'default@example.com',
          department: 'defaultDepartment'
        };

        setUserDetails(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return { userDetails, loading, error };
};

export default useUserDetails;
