import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-400 text-black py-4 px-6 rounded-full mx-auto min-w-[500px] mt-4 flex items-center justify-between">
      <div className="text-xl font-semibold ml-4">Book Bounce</div>
      <ul className="flex space-x-6 mr-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">MyBooks</a></li>
        <li><a href="#" className="hover:underline">Login</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
