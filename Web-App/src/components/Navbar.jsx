// import React from 'react';
import { Link } from 'react-router-dom';
import flags from "../assets/flags.jpg";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 flex justify-between items-center h-20 px-10 shadow-md">
      <div className="flex items-center">
        <img src={flags} alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
        <h1 className="text-white font-bold ml-2 text-lg">Flags IA</h1>
      </div>
      <div className="flex space-x-8 px-7">
        <Link to="/" className="text-white font-medium hover:text-gray-300 transition duration-300">Inicio</Link>
        <Link to="/ia" className="text-white font-medium hover:text-gray-300 transition duration-300">Test</Link>
      </div>
    </div>
  );
};

export default Navbar;
