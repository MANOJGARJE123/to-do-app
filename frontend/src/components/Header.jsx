import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  console.log(user);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-64 right-0 z-10 h-16">
      <h1 className="text-xl font-bold">Inbox</h1>
      <div className="flex items-center space-x-4">
        {user != null ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </NavLink>
            <NavLink to="/register" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Register
            </NavLink>
          </>
        )}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.004 2.004 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div className="relative">
          <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100">
            <span className="text-gray-700">Display</span>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
