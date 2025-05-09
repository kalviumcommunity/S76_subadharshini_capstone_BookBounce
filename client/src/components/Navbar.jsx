// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BookBoune</div>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">MyBooks</a></li>
          <li><a href="#" className="hover:text-gray-300">Swap</a></li>
          <li><a href="#" className="hover:text-gray-300">Login</a></li>
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
