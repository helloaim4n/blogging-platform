import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import BlogModel from "./src/models/BlogPost.js";

dotenv.config();

const app = express();

// Load your application's configuration
// import { mongoURI } from "./src/config/database.js";

// // Connect to the MongoDB database
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

mongoose.connect("mongodb://localhost:27017/blog");

// Middleware
app.use(express.json());
app.use(cors());

// Define and use your routes
// import BlogRoutes from "./src/routes/blog.js"; // Import your blog routes
// import AuthRoutes from "./src/routes/auth.js"; // Import your authentication routes
// app.use("/api", BlogRoutes);
// app.use("/api/auth", AuthRoutes);
app.get("/api/blog", (req, res) => {
  BlogModel.find()
    .then((blogpost) => res.json(blogpost))
    .catch((err) => res.json(err));
});

// Start your Express server
const PORT = process.env.PORT || 8080; // Use an environment variable for production
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
