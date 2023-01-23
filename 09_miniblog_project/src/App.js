import './App.css';

import { BrowserRouter, Routes, Route, RouterProps, Navigate } from "react-router-dom"
import { onAuthStateChanged } from '@firebase/auth';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  if(loadingUser){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>

          <Navbar />

          <div className='container'>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>

          </div>

          <Footer />

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
