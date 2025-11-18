import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ currentView, setCurrentView }) => {
  const { user } = useAuth();
  const location = useLocation();

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
            <NavLink
              to="/dashboard?filter=inbox"
              onClick={() => setCurrentView("inbox")}
              className={`flex items-center p-2 text-gray-700 rounded-md mx-2 ${
                currentView === "inbox" ? "bg-red-100" : "hover:bg-gray-100"
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4"></path></svg>
              Inbox
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/dashboard?filter=today"
              onClick={() => setCurrentView("today")}
              className={`flex items-center p-2 text-gray-700 rounded-md mx-2 ${
                currentView === "today" ? "bg-gray-100" : "hover:bg-gray-100"
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Today
              <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">14</span>
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/dashboard?filter=upcoming"
              onClick={() => setCurrentView("upcoming")}
              className={`flex items-center p-2 text-gray-700 rounded-md mx-2 ${
                currentView === "upcoming" ? "bg-gray-100" : "hover:bg-gray-100"
              }`}
            >
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
            <NavLink
              to="/dashboard?filter=completed"
              onClick={() => setCurrentView("completed")}
              className={`flex items-center p-2 text-gray-700 rounded-md mx-2 ${
                currentView === "completed" ? "bg-gray-100" : "hover:bg-gray-100"
              }`}
            >
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
      </div>
    </div>
  );
};

export default Sidebar;
