const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Backend: Received token:', token); // Debug log
      console.log('Backend: JWT_SECRET:', process.env.JWT_SECRET); // Debug log

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Backend: Decoded token:', decoded); // Debug log

      req.user = await User.findById(decoded.id).select('-password');

      next(); // Call next only on successful authentication
    } catch (error) {
      console.error('Backend: Token verification failed:', error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
