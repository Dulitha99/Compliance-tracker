import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useUserLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      // Check if the response status is OK (200-299)
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Logout failed");
      }

      // Clear local storage and auth context
      localStorage.removeItem("user"); // Change to "user" for user logout
      setAuthUser(null); // Clear the authUser in context
      toast.success("Logout successful!"); // Show success toast
    } catch (error) {
      // Handle errors and provide feedback
      console.error("Logout error:", error); // Log error for debugging
      toast.error(error.message || "An error occurred during logout."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useUserLogout;
