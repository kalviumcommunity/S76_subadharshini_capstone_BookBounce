import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import { toast } from 'react-toastify'; // Uncomment if using toast

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/login',
        { email, password },
        { withCredentials: true }
      );

      console.log(response.data);
      // toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      // toast.error('Invalid credentials. Please try again.');
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-10">
      <Navbar />

      <div className="bg-gray-300 rounded-lg p-8 w-full max-w-md shadow-lg mt-10">
        <h2 className="text-center text-2xl font-bold mb-6 text-black">LOGIN</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-black font-semibold">Email or Username:</label>
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-black font-semibold">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-400 focus:outline-none"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <div className="text-sm text-black">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-700 font-medium">
              Signup
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
