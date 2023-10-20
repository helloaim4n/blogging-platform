import express from "express";
import * as BlogController from "../controllers/BlogController.js";

// Create an instance of the express router
const router = express.Router();

// Define your API endpoints
router.get("/blogs", BlogController.list);
router.get("/blog/:id", BlogController.read);
router.post("/blog", BlogController.create);
router.put("/blog/:id", BlogController.update);
router.delete("/blog/:id", BlogController.remove);

export default router;
