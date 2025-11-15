const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log("Backend Received Token:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Backend Decoded:", decoded);

      req.user = await User.findById(decoded.id).select('-password');

      return next();
    } catch (error) {
      console.log("Token verification failed:", error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  return res.status(401).json({ message: "Not authorized, no token" });
};

module.exports = { protect };
