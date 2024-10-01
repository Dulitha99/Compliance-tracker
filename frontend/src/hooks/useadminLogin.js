import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; 
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

      const textResponse = await response.text(); 

     
      let adminData;
      try {
        adminData = JSON.parse(textResponse);
      } catch (parseError) {
        console.error("Parsing error:", parseError.message);
        console.error("Raw response text:", textResponse); 
        setError('Unexpected server response.');
        toast.error('Unexpected server response.');
        return;
      }

      if (!response.ok) {
       
        console.error("Login Error:", adminData);
        setError(adminData.error || 'Login failed. Please check your credentials.');
        toast.error(adminData.error || 'Login failed. Please check your credentials.');
        return;
      }

      
      console.log("Login successful, received data:", adminData); 
      localStorage.setItem('admin', JSON.stringify(adminData));
      setAuthUser({ ...adminData, role: 'admin' });

     
      navigate('/admindashboard');
      toast.success('Logged in successfully');
    } catch (err) {
      console.error("Login Error:", err.message); 
      setError('An unexpected error occurred.');
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { loginAdmin, loading, error };
};

export default useAdminLogin;
