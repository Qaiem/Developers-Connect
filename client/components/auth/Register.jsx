import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
  
    // Client-side validation
    if (!name || !email || !password || !password2) {
      setError('All fields are required');
      return;
    }
  
    // Simple email regex for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }
  
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
  
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
        password2,
      });
  
      setMessage(data.message);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || 'Server error. Please try again later.';
      setError(errorMsg);
      console.error('Registration error:', err);
    }
  };
  
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-4 mt-1">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Register Yourself</h1>

        {message && <p className="text-green-600 text-center mb-3">{message}</p>}
        {error && <p className="text-red-600 text-center mb-3">{error}</p>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <InputField label="Full Name" type="text" value={name} onChange={setName} />
          <InputField label="Email" type="email" value={email} onChange={setEmail} />
          
          <PasswordField 
            label="Password" 
            value={password} 
            setValue={setPassword} 
            show={showPassword} 
            toggleShow={() => setShowPassword(!showPassword)} 
          />

          <PasswordField 
            label="Confirm Password" 
            value={password2} 
            setValue={setPassword2} 
            show={showPassword2} 
            toggleShow={() => setShowPassword2(!showPassword2)} 
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <Link to="/login" className="text-center text-sm text-gray-600 mt-4 block">
          Already have an account? <span className="text-blue-600 hover:underline">Login</span>
        </Link>
      </div>
    </div>
  );
};

// ✅ InputField Component
const InputField = ({ label, type, value, onChange }) => (
  <div>
    <label className="block text-gray-600 font-medium mb-1">{label}</label>
    <input
      type={type}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </div>
);

// ✅ PasswordField Component
const PasswordField = ({ label, value, setValue, show, toggleShow }) => (
  <div>
    <label className="block text-gray-600 font-medium mb-1">{label}</label>
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button
        type="button"
        onClick={toggleShow}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
      >
        {show ? <EyeSlashIcon /> : <EyeOpenIcon />}
      </button>
    </div>
  </div>
);

// ✅ Eye Icons
const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M4.293 4.293a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414l-1.868-1.868A7.018 7.018 0 0110 17c-4.418 0-8-4-8-7s3.582-7 8-7a7.018 7.018 0 015.586 2.879l1.121-1.121a1 1 0 111.415 1.414l-16 16a1 1 0 01-1.414-1.414L4.293 4.293zM10 5c-3.314 0-6 2.686-6 5s2.686 5 6 5a5.984 5.984 0 004.472-2.035l-1.414-1.414A4.001 4.001 0 0110 13a4 4 0 010-8z" />
  </svg>
);

const EyeOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 3c-4.418 0-8 4-8 7s3.582 7 8 7 8-4 8-7-3.582-7-8-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
    <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

export default Register;
