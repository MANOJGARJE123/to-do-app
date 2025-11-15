import React from 'react';

const EmptyDashboardContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <svg className="w-24 h-24 mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
      </svg>
      <h2 className="text-xl font-bold mb-2">No tasks yet!</h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        Looks like your to-do list is empty. Start by adding a new task to get organized.
      </p>
    </div>
  );
};

export default EmptyDashboardContent;
