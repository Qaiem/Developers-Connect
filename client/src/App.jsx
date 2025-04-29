import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux';
import store from './store';
import {jwtDecode} from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser,logoutUser } from './actions/authActions';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

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
