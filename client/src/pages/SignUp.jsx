// SignupPage.jsx

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile: '',
    countryCode: '+91',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post('http://localhost:8000/api/signup', formData);
    alert('Signup successful!');
    console.log('Response:', response.data);
    Navigate('/login');
  } catch (error) {
    console.error('Signup error:', error.response?.data || error.message);
    alert(error.response?.data?.message || 'Signup failed. Try again.');
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-10">
      {/* Navbar */}
      <Navbar/>

      {/* Sign Up Form */}
      <div className="bg-gray-300 rounded-lg p-8 w-full max-w-md shadow-lg mt-10">
        <h2 className="text-center text-2xl font-bold mb-6 text-black">SIGN UP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black font-semibold">First Name:</label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Last Name:</label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Username:</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-black font-semibold">E-mail:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Mobile:</label>
            <input
              type="text"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-black font-semibold">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <div className="relative">
            <label className="block text-black font-semibold">Confirm password:</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <div className="text-sm text-black">
            Already Have an account? <Link to="/login" className="text-blue-700 font-medium">Login</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md text-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
