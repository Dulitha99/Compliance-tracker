import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import UserDashboard from "./pages/userdashboard/userdashboard";
import SettingsUser from "./pages/userdashboard/settings";
import UserPolicies from "./pages/userdashboard/policies";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext(); 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={authUser ? <Navigate to="/userdashboard" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/userdashboard" /> : <Signup />} />
        
        <Route path="/userdashboard" element={authUser ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/usersettings" element={authUser ? <SettingsUser /> : <Navigate to="/login" />} />
        <Route path="/userpolicies" element={authUser ? <UserPolicies /> : <Navigate to="/login" />} />
    
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
