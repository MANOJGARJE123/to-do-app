import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

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
  const [currentView, setCurrentView] = useState("inbox");
  const [allTasks, setAllTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);

  const handleQuickAddTask = async (taskData) => {
    try {
      const response = await taskService.createTask(
        { ...taskData, description: taskData.description || "" },
        user.token
      );
      setAllTasks((prevAllTasks) => [...prevAllTasks, response]);
      toast.success(`Task "${response.title}" added successfully!`, {
        icon: '✅',
      });
    } catch (error) {
      console.error("Error creating quick task:", error);
      toast.error("Failed to add task. Please try again.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const taskToDelete = allTasks.find((task) => (task._id || task.id) === taskId);
      await taskService.deleteTask(taskId, user.token);
      setAllTasks((prevAllTasks) =>
        prevAllTasks.filter((task) => (task._id || task.id) !== taskId)
      ); // Update allTasks
      toast.success(`Task "${taskToDelete?.title || 'Task'}" deleted successfully!`, {
        icon: '🗑️',
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task. Please try again.");
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const updatedTask = await taskService.updateTask(
        task._id || task.id,
        { ...task, completed: !task.completed },
        user.token
      );
      setAllTasks((prevAllTasks) =>
        prevAllTasks.map((t) =>
          (t._id || t.id) === (task._id || task.id) ? updatedTask : t
        )
      ); // Update allTasks
      toast.success(
        updatedTask.completed 
          ? `Task "${task.title}" marked as completed! 🎉` 
          : `Task "${task.title}" marked as pending.`,
        {
          icon: updatedTask.completed ? '✅' : '📝',
        }
      );
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task status. Please try again.");
    }
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      const updatedTask = await taskService.updateTask(taskId, updatedData, user.token);
      setAllTasks((prevAllTasks) =>
        prevAllTasks.map((t) => (t._id || t.id) === taskId ? updatedTask : t)
      );
      toast.success(`Task "${updatedTask.title}" updated successfully!`, {
        icon: '✏️',
      });
      return updatedTask;
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task. Please try again.");
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        try {
          const fetchedTasks = await taskService.getTasks(user.token, currentView);
          console.log(fetchedTasks);
          setAllTasks(fetchedTasks); // Store all fetched tasks
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
      fetchTasks();
    }
  }, [user, currentView]);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const filterTasks = () => {
      let filtered = [...allTasks]; 

      switch (currentView) {
        case "today":
          filtered = filtered.filter(
            (task) =>
              !task.completed &&
              task.dueDate &&
              new Date(task.dueDate).setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
          );
          break;
        case "upcoming":
          filtered = filtered.filter(
            (task) =>
              !task.completed &&
              task.dueDate &&
              new Date(task.dueDate).setHours(0, 0, 0, 0) >= tomorrow.setHours(0, 0, 0, 0)
          );
          break;
        case "completed":
          filtered = filtered.filter((task) => task.completed);
          break;
        case "inbox":
        default:
          filtered = filtered.filter(
            (task) => !task.completed && task.dueDate === null
          );
          break;
      }
      setDisplayTasks(filtered);
    };

    filterTasks();
  }, [allTasks, currentView]); 

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
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pt-16 ml-64">
          <div className="container mx-auto px-6 pt-4 pb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)} Tasks
            </h1>
            <QuickAddTask onQuickAddTask={handleQuickAddTask} />
            {displayTasks.length === 0 ? (
              <EmptyDashboardContent />
            ) : (
              <>
                <InboxContent 
                  tasks={displayTasks} 
                  onDeleteTask={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                  onUpdateTask={handleUpdateTask}
                  currentView={currentView}
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
