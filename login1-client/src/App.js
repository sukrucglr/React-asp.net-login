import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import HomePage from './pages/HomePage'
import React from 'react'
 import NavBar from './pages/NavBar'

function App() {
  
  return (
    
    <BrowserRouter>
    
      <Routes>
     
      
                    <Route exact path="/" element={< LandingPage/> } />
                    <Route path="/login" element={< LoginPage/> } />
                    <Route path="/register" element={< RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                   
                    
                   
      
      </Routes>
    </BrowserRouter >
  );
}

export default App;
