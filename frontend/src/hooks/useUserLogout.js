import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser, authUser } = useAuthContext(); 
  const navigate = useNavigate(); 
  const logout = async () => {
    setLoading(true);
    try {
      const isAdmin = authUser?.role === "admin"; 

      const res = await fetch(isAdmin ? "/api/admin/adminlogout" : "/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

     
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Logout failed");
      }

     
      localStorage.removeItem(isAdmin ? "admin" : "user"); 
      setAuthUser(null); 
      toast.success("Logout successful!");

     
      navigate("/");
    } catch (error) {
      
      console.error("Logout error:", error);
      toast.error(error.message || "An error occurred during logout.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
