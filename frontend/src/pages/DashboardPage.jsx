import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InboxContent from '../components/InboxContent';

function DashboardPage() {
  const auth = useAuth() || {};
  const { user, loading } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
    
    if (user) {
    }
  }, [user, loading, navigate]);


  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 mt-16 ml-64">
          <div className="container mx-auto px-6 py-8">
            <InboxContent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
