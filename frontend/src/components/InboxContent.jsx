import React from 'react';

const InboxContent = ({ onAddTask }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <svg className="w-24 h-24 mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
      </svg>
      <h2 className="text-xl font-bold mb-2">Capture now, plan later</h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        Inbox is your go-to spot for quick task entry. Clear your mind now, organize when you're ready.
      </p>
      <button onClick={onAddTask} className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-600">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        Add task
      </button>
    </div>
  );
};

export default InboxContent;
