import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import InboxContent from "../components/InboxContent";
import QuickAddTask from "../components/QuickAddTask";

import taskService from "../services/taskService";
import EmptyDashboardContent from "../components/EmptyDashboardContent";

function DashboardPage() {
  const auth = useAuth() || {};
  const { user, loading } = auth;
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [currentView, setCurrentView] = useState("inbox");

  const handleQuickAddTask = async (taskData) => {
    try {
      const response = await taskService.createTask(
        { ...taskData, description: "", dueDate: null, priority: "Medium" },
        user.token
      );
      setTasks((prevTasks) => [...prevTasks, response]);
    } catch (error) {
      console.error("Error creating quick task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId, user.token);
      setTasks((prevTasks) => prevTasks.filter((task) => (task._id || task.id) !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const updatedTask = await taskService.updateTask(
        task._id || task.id,
        { ...task, completed: !task.completed },
        user.token
      );
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id || t.id) === (task._id || task.id) ? updatedTask : t)
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      const updatedTask = await taskService.updateTask(taskId, updatedData, user.token);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id || t.id) === taskId ? updatedTask : t)
      );
      return updatedTask;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        try {
          const fetchedTasks = await taskService.getTasks(user.token);
          console.log(fetchedTasks);
          setTasks(fetchedTasks);
        } catch (error) {
          console.error("Error fetching tasks:", error);
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome, {user.username}!
            </h1>
            <QuickAddTask onQuickAddTask={handleQuickAddTask} />
            {tasks.length === 0 ? (
              <EmptyDashboardContent />
            ) : (
              <>
                <InboxContent 
                  tasks={tasks} 
                  onDeleteTask={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                  onUpdateTask={handleUpdateTask}
                />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
