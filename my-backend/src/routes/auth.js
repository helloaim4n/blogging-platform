import express from 'express';
import * as AuthController from '../controllers/AuthController.js';
import * as AuthMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router();

// User registration route
router.post('/api/register', AuthController.register);
// User login route
router.post('/api/login', AuthController.login)
// User profile route (requires authentication)
router.get('/api/profile', AuthMiddleware.default, AuthController.getProfile);
// Token refresh route
router.post('/api/refresh', AuthController.refreshToken);

export default router;
