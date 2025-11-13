const Task = require('../models/Task');
const Reminder = require('../models/reminder');
const { sendEmail } = require('../utils/emailService');

const scheduleReminder = async (task, user) => {
  const reminderTime = new Date(task.dueDate.getTime() - (30 * 60 * 1000));

  if (reminderTime > new Date()) {
    await Reminder.create({
      task: task._id,
      user: user._id,
      reminderDate: reminderTime,
    });
    console.log(`Reminder scheduled for task ${task._id} at ${reminderTime}`);
  }
};

const sendReminders = async () => {
  const now = new Date();
  const reminders = await Reminder.find({
    reminderDate: { $lte: now },
    sent: false,
  }).populate('task user');

  for (const reminder of reminders) {
    const task = reminder.task;
    const user = reminder.user;

    if (task && user) {
      const emailContent = `
        <h1>Task Reminder</h1>
        <p>Hi ${user.username},</p>
        <p>This is a reminder for your task: <strong>${task.title}</strong></p>
        <p>Due Date: ${task.dueDate.toLocaleString()}</p>
        <p>Description: ${task.description || 'No description'}</p>
        <p>Priority: ${task.priority}</p>
        <p>Please complete it on time!</p>
      `;

      const emailSent = await sendEmail(user.email, 'Task Reminder', emailContent);

      if (emailSent) {
        reminder.sent = true;
        await reminder.save();
        console.log(`Reminder email sent to ${user.email} for task ${task.title}`);
      }
    } else {
      console.log(`Task or user not found for reminder ${reminder._id}`);
    }
  }
};

module.exports = { scheduleReminder, sendReminders };
