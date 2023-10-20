// authMiddleware.js

import jwt from 'jsonwebtoken';
import config from '../config/database.js';

const AuthMiddleware = (req, res, next) => {
  // Get the token from the request headers or query parameters
  const token = req.headers['authorization'] || req.query.token;

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. Token not provided.' });
  }

  // Verify the token
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
    }

    // Attach the decoded user data to the request object for use in route handlers
    req.user = decoded;

    // Call the next middleware or route handler
    next();
  });
};

export default AuthMiddleware;
