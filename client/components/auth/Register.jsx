import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md mt-35">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Register Yourself</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                {showPassword ? (
                  <EyeSlashIcon />
                ) : (
                  <EyeOpenIcon />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword2 ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                {showPassword2 ? (
                  <EyeSlashIcon />
                ) : (
                  <EyeOpenIcon />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"

          >
            Register
          </button>
        </form>
        <Link to="/login" className="text-center text-sm text-gray-500 mt-4 block">
          Already have an account? <span className="text-blue-600 cursor-pointer hover:underline">Login</span>
        </Link>
      </div>
    </div>
  );
};

// Optional: Extracting eye icons for reuse
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
