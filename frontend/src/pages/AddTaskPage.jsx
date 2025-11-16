import React from 'react';
import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';
import taskService from '../services/taskService';
import { useAuth } from '../context/AuthContext';

const AddTaskPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAddTask = async (taskData) => {
    try {
      await taskService.createTask(taskData, user.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <TaskForm onSubmit={handleAddTask} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default AddTaskPage;
