const Task = require('../models/Task');
const { scheduleReminder } = require('../controllers/reminderController');
const Reminder = require('../models/reminder');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to view this task' });
    }

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  
  

  if (!title) {
    return res.status(400).json({ message: 'Please add a title' });
  }

  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      user: "userid1"
    });

    if (task.dueDate) {
      await scheduleReminder(task, req.user);
    }

    res.status(201).json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const updateTask = async (req, res) => {
  const { title, description, dueDate, priority, completed } = req.body;

  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to update this task' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;
    task.completed = completed !== undefined ? completed : task.completed;

    const updatedTask = await task.save();

    if (dueDate) {
      await Reminder.deleteOne({ task: updatedTask._id });
      await scheduleReminder(updatedTask, req.user);
    } else if (task.dueDate && !dueDate) {
      await Reminder.deleteOne({ task: updatedTask._id });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to delete this task' });
    }

    await task.deleteOne();
    await Reminder.deleteOne({ task: req.params.id });

    res.status(200).json({ message: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
