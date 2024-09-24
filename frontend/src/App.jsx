import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
