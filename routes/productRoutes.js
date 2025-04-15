// routes/productRoutes.js
const express = require('express');
const { getProducts, updateProducts, addProduct, deleteProduct } = require('../controllers/productController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getProducts); // Public route
router.put('/', authenticateToken, isAdmin, updateProducts);
router.post('/', authenticateToken, isAdmin, addProduct);
router.delete('/:id', authenticateToken, isAdmin, deleteProduct);

module.exports = router;
