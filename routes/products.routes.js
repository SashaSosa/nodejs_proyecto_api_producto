import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/api/products', getAllProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products/create', authenticateToken, createProduct);
router.delete('/api/products/:id', authenticateToken, deleteProduct);

export default router;
