import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InboxContent from '../components/InboxContent';
import QuickAddTask from '../components/QuickAddTask'; // Import QuickAddTask

import taskService from '../services/taskService';
import EmptyDashboardContent from '../components/EmptyDashboardContent';

function DashboardPage() {
  const auth = useAuth() || {};
  const { user, loading } = auth;
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [currentView, setCurrentView] = useState('inbox'); // State to manage current view

  const handleQuickAddTask = async (taskData) => {
    try {
      const newTask = await taskService.createTask({ ...taskData, description: '', dueDate: null, priority: 'Medium' }, user.token);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Error creating quick task:', error);
      // Handle error
    }
  };

  // And here is the updated useEffect to fetch tasks when the user is available.
  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        try {
          const fetchedTasks = await taskService.getTasks(user.token);
          setTasks(fetchedTasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
          // Handle error (e.g., show an error message)
        }
      };
      fetchTasks();
    }
  }, [user]);

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 mt-16 ml-64">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.username}!</h1>

            <QuickAddTask onQuickAddTask={handleQuickAddTask} /> {/* Add QuickAddTask component */}

            {tasks.length === 0 ? (
              <EmptyDashboardContent />
            ) : (
              <>
                {/* Render existing tasks here once fetched */}
                {/* Always render InboxContent if tasks are present */}
                <InboxContent tasks={tasks} />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
