import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialData = {}, isEditing, onCancel }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [dueDate, setDueDate] = useState(initialData.dueDate ? new Date(initialData.dueDate).toISOString().slice(0, 16) : '');
  const [priority, setPriority] = useState(initialData.priority || 'Medium');

  useEffect(() => {
    setTitle(initialData.title || '');
    setDescription(initialData.description || '');
    setDueDate(initialData.dueDate ? new Date(initialData.dueDate).toISOString().slice(0, 16) : '');
    setPriority(initialData.priority || 'Medium');
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      dueDate: dueDate || null,
      priority,
    });
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{isEditing ? 'Edit Task' : 'Create New Task'}</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description (Optional)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date (Optional)</label>
        <input
          type="datetime-local"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
      {isEditing && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px', backgroundColor: '#6c757d' }}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;
