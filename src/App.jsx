import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import Orders from './pages/Orders/Orders';
import List from './pages/List/List';
import Login from './pages/Login/Login'; 
import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = "https://food-backendd.vercel.app/";  

  // Check if token exists in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div>
      <ToastContainer />
      {/* If not logged in → show Login page */}
      {!isLoggedIn ? (
        <Login url={url} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path='/add' element={<Add url={url} />} />
              <Route path='/order' element={<Orders url={url} />} />
              <Route path='/list' element={<List url={url} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
