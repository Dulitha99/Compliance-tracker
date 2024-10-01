import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAuthUser({ ...JSON.parse(storedAdmin), role: 'admin' });
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthUser({ ...JSON.parse(storedUser), role: 'user' });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
