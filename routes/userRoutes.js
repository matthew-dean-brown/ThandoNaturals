import express from 'express';
import {
  adduser,
  getusers,
  getuser,
  deleteuser,
  updateuser,
} from '../controllers/userController';

const router = express.Router();

// Add a user
router.post('/users', adduser);

// Get all users
router.get('/users', getusers);

// Get user by ID
router.get('/users/:idusers', getuser);

// Delete a user
router.delete('/users/:idusers', deleteuser);

// Update a user
router.patch('/users/:idusers', updateuser);

export default router;
