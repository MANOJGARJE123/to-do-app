import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  
  // Extract first name from username (first word if username contains spaces)
  const getFirstName = () => {
    if (!user || !user.username) return 'User';
    const firstName = user.username.split(' ')[0];
    return firstName;
  };

  const firstName = getFirstName();
  const firstLetter = firstName.charAt(0).toUpperCase();

  return (
    <div className="w-64 bg-white shadow-md h-screen fixed">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">{firstLetter}</div>
          <span className="font-semibold text-lg">{firstName}</span>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="mb-2">
            <NavLink to="/add-task" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-red-500 bg-red-100 rounded-md mx-2"
                : "flex items-center p-2 text-red-500 hover:bg-red-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              Add task
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/search" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              Search
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/inbox" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-red-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4"></path></svg>
              Inbox
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/today" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Today
              <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">14</span>
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/upcoming" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Upcoming
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/filters-labels" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              Filters & Labels
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/completed" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Completed
            </NavLink>
          </li>
        </ul>
        <div className="mt-6 mx-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">My Projects</h2>
          <ul className="mt-2">
            <li className="mb-2">
              <NavLink to="/project/getting-started" className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md"
                  : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              }>
                <span className="mr-3">#</span> Getting Started
                <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">14</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="absolute bottom-4 left-0 w-full p-4 border-t">
        <ul>
          <li className="mb-2">
            <NavLink to="/add-team" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              Add a team
            </NavLink>
          </li>
          <li>
            <NavLink to="/help-resources" className={({ isActive }) =>
              isActive
                ? "flex items-center p-2 text-gray-700 bg-gray-100 rounded-md mx-2"
                : "flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md mx-2"
            }>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247a4.125 4.125 0 115.834 5.834L12 18.002l-1.414-1.414-4.243 4.243a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l4.243-4.243-1.414-1.414z"></path></svg>
              Help & resources
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
