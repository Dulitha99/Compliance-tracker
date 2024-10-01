import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Adjust the path as necessary
import toast from 'react-hot-toast';

const useAdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const loginAdmin = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      // Debugging the request body
      console.log("Login request data:", {
        username: formData.adminUsername,
        password: formData.adminPassword,
      });

      const response = await fetch('/api/admin/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.adminUsername,
          password: formData.adminPassword,
        }),
      });

      const textResponse = await response.text(); // Get the response as text

      // Try to parse as JSON
      let adminData;
      try {
        adminData = JSON.parse(textResponse);
      } catch (parseError) {
        console.error("Parsing error:", parseError.message);
        console.error("Raw response text:", textResponse); // Log the raw response
        setError('Unexpected server response.');
        toast.error('Unexpected server response.');
        return;
      }

      if (!response.ok) {
        // Handle error response
        console.error("Login Error:", adminData);
        setError(adminData.error || 'Login failed. Please check your credentials.');
        toast.error(adminData.error || 'Login failed. Please check your credentials.');
        return;
      }

      // On successful login, store admin in localStorage and set auth context
      console.log("Login successful, received data:", adminData); // Debugging the response
      localStorage.setItem('admin', JSON.stringify(adminData));
      setAuthUser({ ...adminData, role: 'admin' });

      // Navigate to the admin dashboard
      navigate('/admindashboard');
      toast.success('Logged in successfully');
    } catch (err) {
      console.error("Login Error:", err.message); // Log the exact error response
      setError('An unexpected error occurred.');
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { loginAdmin, loading, error };
};

export default useAdminLogin;
