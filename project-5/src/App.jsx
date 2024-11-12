import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './component/PrivateRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen overflow-x-hidden h-screen bg-deepBlue flex flex-col text-white'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
       
      </Routes>
    </div>
  );
}

export default App;
