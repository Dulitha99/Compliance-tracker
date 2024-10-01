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
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext(); 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={authUser ? <Navigate to={authUser.role === 'admin' ? "/admindashboard" : "/userdashboard"} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/userdashboard" /> : <Signup />} />

        <Route path="/admin" element={<Admin />}/>
        <Route path="/adminregister" element={authUser?.role === 'admin' ? <AdminRegister /> : <Navigate to="/login" />} />
        <Route path="/admindashboard" element={authUser?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/adminsettings" element={authUser?.role === 'admin' ? <AdminSettings /> : <Navigate to="/login" />} />
        <Route path="/employee" element={authUser?.role === 'admin' ? <Employee /> : <Navigate to="/login" />} />
        <Route path="/reports" element={authUser?.role === 'admin' ? <Report /> : <Navigate to="/login" />} />

        <Route path="/userdashboard" element={authUser?.role === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/usersettings" element={authUser?.role === 'user' ? <SettingsUser /> : <Navigate to="/login" />} />
        <Route path="/userpolicies" element={authUser?.role === 'user' ? <UserPolicies /> : <Navigate to="/login" />} />
    
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
