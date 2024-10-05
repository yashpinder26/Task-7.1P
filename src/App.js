import React, { useEffect, useState } from 'react';
import Login from './Login.jsx';
import SignUp from './register.jsx';
import NavBAR from './navbar.jsx';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import {auth } from "./firebase.jsx";
import "./App.css";


function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    });
  });

  return (
    <Router>
      <div className='container'>
        <NavBAR />
        <div className='app'>
          <Routes>
            <Route 
              path='/' element={user ? <Link to="/profile" /> : <Login />} 
            />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;