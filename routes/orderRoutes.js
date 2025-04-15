const express = require('express');
const { getCustomerOrders, createOrder, getAllOrders, updateOrderStatus, updateTrackingProgress, deleteOrder } = require('../controllers/orderController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/all', authenticateToken, isAdmin, getAllOrders); // For admin
router.get('/:email', authenticateToken, getCustomerOrders); // For customers
router.post('/', authenticateToken, createOrder); // Create new order
router.put('/:orderId/status', authenticateToken, isAdmin, updateOrderStatus); // Update order status
router.put('/:orderId/tracking', authenticateToken, isAdmin, updateTrackingProgress); // Update tracking progress
router.delete('/:orderId', authenticateToken, isAdmin, deleteOrder); // Delete order

module.exports = router;
