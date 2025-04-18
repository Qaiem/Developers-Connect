import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Content with top padding to account for the fixed navbar */}
      <div className="container mx-auto pt-8"> {/* Added padding top to avoid overlap */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
