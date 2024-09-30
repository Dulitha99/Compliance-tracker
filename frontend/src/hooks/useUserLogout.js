import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useUserLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {  // Ensure this endpoint is correct
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("user"); // Change to "user" for user logout
      setAuthUser(null); // Clear the authUser in context
      toast.success("Logout successful!"); // Show success toast
    } catch (error) {
      toast.error(error.message); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useUserLogout;
