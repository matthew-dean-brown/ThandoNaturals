import { checkuser } from '../models/database';
import bcrypt from 'bcrypt';

// Authenticate user
export const authenticateUser = async (req, res, next) => {
  const { emailAdd, userPass } = req.body;

  const passwordMatch = await checkuser(emailAdd, userPass);

  if (passwordMatch) {
    next(); // Passwords match, proceed
  } else {
    res.status(401).json({ msg: 'Authentication failed' });
  }
};
