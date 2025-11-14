import React from 'react';

const InboxContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <img src="/path/to/your/image.png" alt="Inbox" className="mb-6 w-64 h-auto" /> {/* Replace with actual image path */}
      <h2 className="text-xl font-bold mb-2">Capture now, plan later</h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        Inbox is your go-to spot for quick task entry. Clear your mind now, organize when you're ready.
      </p>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-600">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        Add task
      </button>
    </div>
  );
};

export default InboxContent;
