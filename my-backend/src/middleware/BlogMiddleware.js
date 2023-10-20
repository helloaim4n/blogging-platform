// BlogMiddleware.js

import User from '../models/User.js';

const BlogMiddleware = (req, res, next) => {
  // Get the user from the request object (set in AuthMiddleware)
  const user = req.user;

  // Check if the user has the right permissions
  User.findById(user.id, (err, foundUser) => {
    if (err || !foundUser || !foundUser.hasPermission('blog')) {
      return res.status(403).json({ message: 'You do not have the necessary permissions.' });
    }

    // Call the next middleware or route handler
    next();
  });
};

export default BlogMiddleware;