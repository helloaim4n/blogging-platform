import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import config from '../config/database.js';

// Function to handle token refresh
export const refreshToken = async (req, res) => {
  try {
    // Get the user's id from the request object
    const { userId } = req.user;

    // Find the user by id
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    // Generate and send a new JWT token for the user
    const newToken = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token: newToken, message: 'Token refreshed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Token refresh failed. Please try again later.' });
  }
};


// Function to handle user registration
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    // Generate and send a JWT token for the registered user
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.status(201).json({ token, userId: user._id, message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed. Please try again later.' });
  }
};

// Function to handle user login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    // Check if the provided password matches the user's password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
    }

    // Generate and send a JWT token for the authenticated user
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token, userId: user._id, message: 'Authentication successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication failed. Please try again later.' });
  }
};

// Function to handle user profile retrieval (protected route)
export const getProfile = (req, res) => {
  // The user's information is attached to the request object by the authMiddleware
  const { userId } = req.user;
  
  // Retrieve the user's profile information from the database based on the userId
  User.findById(userId, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching user profile.' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ user });
  });
};
