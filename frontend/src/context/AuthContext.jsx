import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Check for admin first
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAuthUser({ ...JSON.parse(storedAdmin), role: 'admin' }); // Set role to admin
      return;
    }

    // Check for user if no admin is found
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthUser({ ...JSON.parse(storedUser), role: 'user' }); // Set role to user
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("admin"); // Remove admin if present
    localStorage.removeItem("user");  // Remove user if present
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
