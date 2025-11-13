const cron = require('node-schedule');
const { sendReminders } = require('../controllers/reminderController');

const startReminderScheduler = () => {
    cron.scheduleJob('* * * * *', async () => {
        console.log('Running reminder check...');
        await sendReminders();
    });
    console.log('Reminder scheduler started.');
};

module.exports = { startReminderScheduler };