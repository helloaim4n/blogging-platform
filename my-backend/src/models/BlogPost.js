import mongoose from "mongoose";

// Define the BlogPost schema
const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  publishedDate: Date,
});

// Create the BlogPost model
const BlogPost = mongoose.model("blogpost", BlogSchema);

export default BlogPost;
