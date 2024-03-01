import express from 'express';
import { authenticateUser } from '../Controller/auth.js';

const router = express.Router();

// Login route with authentication middleware
router.post('/login', authenticateUser, (req, res) => {
  res.send({
    msg: 'You have successfully logged in!!! Yay!!',
  });
});

export default router;
