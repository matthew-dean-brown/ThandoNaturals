import express from 'express';
import {
  updateUser,addUser,deleteUser,getUser,getUsers,
} from '../Controller/user.js';

const router = express.Router();

// Add a user
router.route('/users').post(addUser).get(getUsers);

// Get all users


// Get user by ID
router.route('/users/:idusers').get( getUser);

// Delete a user
router.route('/users/:idusers').delete( deleteUser);

// Update a user
router.route('/users/:idusers').patch( updateUser);

export default router;