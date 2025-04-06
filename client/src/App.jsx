import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
