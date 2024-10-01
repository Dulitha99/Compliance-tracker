import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Admin from './pages/admin/admin';
import AdminRegister from "./pages/admin/adminregister";
import AdminDashboard from "./pages/admin/admindashboard";
import UserDashboard from "./pages/userdashboard/userdashboard";
import SettingsUser from "./pages/userdashboard/settings";
import UserPolicies from "./pages/userdashboard/policies";
import AdminSettings from "./pages/admin/adminsettings";
import Employee from "./pages/admin/employee";
import Report from "./pages/admin/reports";
import { useAuthContext } from "./context/AuthContext"; // Import your AuthContext

const App = () => {
  const { authUser } = useAuthContext(); // Get the authUser from context

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={authUser ? <Navigate to="/userdashboard" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/userdashboard" /> : <Signup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminsettings" element={<AdminSettings />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/reports" element={<Report />} />

        {/* Protected User Routes */}
        <Route path="/userdashboard" element={authUser ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/usersettings" element={authUser ? <SettingsUser /> : <Navigate to="/login" />} />
        <Route path="/userpolicies" element={authUser ? <UserPolicies /> : <Navigate to="/login" />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
