// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Unauthorized');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  if (req.user.role !== 'admin') return res.status(403).send('Access denied. Admin only.');
  next();
};

module.exports = {
  authenticateToken,
  isAdmin
};
