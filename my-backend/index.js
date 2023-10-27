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

//Create a new blog post
app.post("/blogs", (req, rest) => {
  const blogpost = new BlogModel(req.body);
  blogpost
    .save()
    .then((data) => {
      rest.json(data);
    })
    .catch((error) => {
      rest.json(error);
    });
});

//Read all blog posts
app.get("/blogs", (req, res) => {
  BlogModel.find()
    .then((blogpost) => res.json(blogpost))
    .catch((err) => res.json(err));
});

//Read a single blog post
app.get("/blogs/:id", (req, res) => {
  BlogModel.findById(req.params.id)
    .then((blogpost) => res.json(blogpost))
    .catch((err) => res.json(err));
});

//Update a single blog post
app.put("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const result = await BlogModel.updateOne(
      { _id: id },
      { $set: updatedData }
    );

    res.json({ message: "Blog post updated successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Something went wrong" });
  }
});

// Start your Express server
const PORT = process.env.PORT || 8080; // Use an environment variable for production
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
