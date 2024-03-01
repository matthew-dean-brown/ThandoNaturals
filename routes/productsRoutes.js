import express from 'express';
import {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} from '../Controller/product.js';

const router = express.Router();

// Get all products
router.get('/products', getProducts);

// Get product by ID
router.get('/products/:prodID', getProduct);

// Add a product
router.post('/products', addProduct);

// Delete a product
router.delete('/products/:prodID', deleteProduct);

// Update a product
router.patch('/products/:prodID', updateProduct);

export default router;