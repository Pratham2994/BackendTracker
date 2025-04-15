// routes/cartRoutes.js
const express = require('express');
const { getCart, updateCart, clearCart } = require('../controllers/cartController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:email', authenticateToken, getCart);
router.post('/', authenticateToken, updateCart);
router.delete('/:email', authenticateToken, clearCart);

module.exports = router;
