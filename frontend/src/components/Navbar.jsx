import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          TodoApp
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold transition duration-300"
              : "text-gray-700 hover:text-blue-600 transition duration-300"
          } end>Home</NavLink>
          <NavLink to="/features" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold transition duration-300"
              : "text-gray-700 hover:text-blue-600 transition duration-300"
          }>Features</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold transition duration-300"
              : "text-gray-700 hover:text-blue-600 transition duration-300"
          }>Testimonials</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold transition duration-300"
              : "text-gray-700 hover:text-blue-600 transition duration-300"
          }>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold transition duration-300"
              : "text-gray-700 hover:text-blue-600 transition duration-300"
          }>Contact</NavLink>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-transparent text-blue-700 border border-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300"
          >
            Register
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-4 border-t border-gray-200">
          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 hover:text-blue-600"
              : "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } onClick={toggleMenu} end>Home</NavLink>
          <NavLink to="/features" className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 hover:text-blue-600"
              : "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } onClick={toggleMenu}>Features</NavLink>
          <NavLink to="/testimonials" className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 hover:text-blue-600"
              : "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } onClick={toggleMenu}>Testimonials</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 hover:text-blue-600"
              : "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } onClick={toggleMenu}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 hover:text-blue-600"
              : "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } onClick={toggleMenu}>Contact</NavLink>
          <Link
            to="/login"
            className="block w-full text-center bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block w-full text-center bg-transparent text-blue-700 border border-blue-700 px-4 py-2 mt-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300"
            onClick={toggleMenu}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
