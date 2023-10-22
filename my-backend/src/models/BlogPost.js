import mongoose from "mongoose";

// Define the BlogPost schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  publishedDate: Date,
});

// Create the BlogPost model
const BlogPost = mongoose.model("blogpost", blogSchema);

BlogPost.find({})
  .select("_id")
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.log(err);
  });

export default BlogPost;
