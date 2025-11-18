const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const { sendEmail } = require('../utils/emailService');

const sendContactMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please enter all fields');
  }

  const contactMessage = await Contact.create({
    name,
    email,
    message,
  });

  if (contactMessage) {
    await sendEmail(email, 'Thank You for Your Feedback', '<p>Dear ' + name + ',</p><p>Thank you for contacting us! We have received your message and will get back to you shortly.</p><p>Best regards,</p><p>The Team</p>');
    res.status(201).json({
      message: 'Your message has been sent successfully!',
    });
  } else {
    res.status(400);
    throw new Error('Invalid contact message data');
  }
});

module.exports = { sendContactMessage };
