import React from 'react';

function TaskItem({ task, onEdit, onDelete, onMarkComplete }) {
  const handleMarkComplete = () => {
    onMarkComplete({
      ...task,
      completed: !task.completed,
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {formatDate(task.dueDate)}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <div className="task-actions">
        <button onClick={() => onEdit(task)} style={{ backgroundColor: '#ffc107', marginRight: '10px' }}>
          Edit
        </button>
        <button onClick={() => onDelete(task._id)} style={{ backgroundColor: '#dc3545', marginRight: '10px' }}>
          Delete
        </button>
        <button onClick={handleMarkComplete} style={{ backgroundColor: task.completed ? '#6c757d' : '#28a745' }}>
          {task.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
      </div>
    </div>
  );
}

export default TaskItem;