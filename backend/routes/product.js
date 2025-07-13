import express from 'express';
import { getAllProducts, createProduct } from '../controllers/productController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public: Get all products with optional filters
router.get('/', getAllProducts);

// Admin: Create product
router.post('/', createProduct);
router.post('/', verifyToken, createProduct);
export default router;

