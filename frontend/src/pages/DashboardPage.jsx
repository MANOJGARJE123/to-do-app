import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import taskService from '../services/taskService';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

function DashboardPage() {
  const auth = useAuth() || {};
  const { user, loading } = auth;
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
    
    if (user) {
      fetchTasks();
    }
  }, [user, loading, navigate]);

  const fetchTasks = async () => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication token missing.');
        return;
      }
      const fetchedTasks = await taskService.getTasks(token);
      setTasks(Array.isArray(fetchedTasks) ? fetchedTasks : []);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to fetch tasks');
    }
  };

  const handleCreateOrUpdateTask = async (taskData) => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication token missing.');
        return;
      }
      if (isEditing && currentTask) {
        await taskService.updateTask(currentTask._id, taskData, token);
      } else {
        await taskService.createTask(taskData, token);
      }
      setIsEditing(false);
      setCurrentTask(null);
      await fetchTasks();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to save task');
    }
  };

  const handleEdit = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication token missing.');
        return;
      }
      await taskService.deleteTask(id, token);
      await fetchTasks();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to delete task');
    }
  };

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Your Tasks</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <TaskForm
        onSubmit={handleCreateOrUpdateTask}
        initialData={currentTask}
        isEditing={isEditing}
        onCancel={() => {
          setIsEditing(false);
          setCurrentTask(null);
        }}
      />
      <div className="tasks-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onMarkComplete={handleCreateOrUpdateTask}
            />
          ))
        ) : (
          <p>No tasks yet. Create one above!</p>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
