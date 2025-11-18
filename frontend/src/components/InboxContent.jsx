import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

const InboxContent = ({ tasks = [], onAddTask, onDeleteTask, onToggleComplete, onUpdateTask }) => {

  const [editingTask, setEditingTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deletingTask, setDeletingTask] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);
    return due < today;
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (taskId, updatedData) => {
    try {
      await onUpdateTask(taskId, updatedData);
      setIsEditModalOpen(false);
      setEditingTask(null);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleDelete = (task) => {
    setDeletingTask(task);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async (taskId) => {
    try {
      await onDeleteTask(taskId);
      setIsDeleteModalOpen(false);
      setDeletingTask(null);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-12">
        <svg className="w-24 h-24 mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <h2 className="text-xl font-bold mb-2">Capture now, plan later</h2>
        <p className="text-gray-600 mb-6 max-w-sm">
          Inbox is your go-to spot for quick task entry. Clear your mind now, organize when you're ready.
        </p>
        {onAddTask && (
          <button onClick={onAddTask} className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-600 cursor-pointer">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            Add task
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Inbox Tasks</h2>
        {onAddTask && (
          <button 
            onClick={onAddTask} 
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-600 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Add task
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id || task.id}
            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 py-5 px-6 border-l-4 h-64 flex flex-col ${
              task.completed 
                ? 'border-gray-300 opacity-75' 
                : task.priority === 'High' 
                  ? 'border-red-500' 
                  : task.priority === 'Medium' 
                    ? 'border-yellow-500' 
                    : 'border-green-500'
            }`}
          >

            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start flex-1">
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => onToggleComplete && onToggleComplete(task)}
                  className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded-full focus:ring-blue-500 cursor-pointer"
                />
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-semibold text-gray-800 mb-1.5 ${
                    task.completed ? 'line-through text-gray-500' : ''
                  }`}>
                    {task.title}
                  </h3>
                  <p className={`text-sm mb-2 line-clamp-1 ${
                    task.description ? 'text-gray-600' : 'text-gray-400 italic'
                  }`}>
                    {task.description || 'No description'}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 flex-1 py-1">
              {task.priority && (
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(task.priority)}`}>
                    {task.priority} Priority
                  </span>
                </div>
              )}

              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className={task.dueDate 
                  ? (isOverdue(task.dueDate) && !task.completed ? 'text-red-600 font-semibold' : 'text-gray-600')
                  : 'text-gray-400 italic'
                }>
                  {task.dueDate 
                    ? `${formatDate(task.dueDate)}${isOverdue(task.dueDate) && !task.completed ? ' (Overdue)' : ''}`
                    : 'No Due Date'
                  }
                </span>
              </div>

              {task.createdAt && (
                <div className="flex items-center text-xs text-gray-400">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Created {formatDate(task.createdAt)}
                </div>
              )}
            </div>


            <div className="mt-auto pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium ${
                  task.completed ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
                <div className="flex items-center space-x-2">
                  {onUpdateTask && (
                    <button
                      onClick={() => handleEdit(task)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                      title="Edit task"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </button>
                  )}
                  {onDeleteTask && (
                    <button
                      onClick={() => handleDelete(task)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                      title="Delete task"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingTask(null);
          }}
          onSave={handleSaveEdit}
        />
      )}

      {deletingTask && (
        <DeleteTaskModal
          task={deletingTask}
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setDeletingTask(null);
          }}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default InboxContent;