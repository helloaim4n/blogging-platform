import BlogPost from "../models/BlogPost.js";

export const create = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlogPost = new BlogPost({ title, content, author });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const list = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const read = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found." });
    }
    res.json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlogPost = await BlogPost.findOneAndUpdate(
      { _id: id },
      { title, content },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ error: "Blog post not found." });
    }
    res.json(updatedBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removedBlogPost = await BlogPost.findOneAndDelete({ _id: id });
    if (!removedBlogPost) {
      return res.status(404).json({ error: "Blog post not found." });
    }
    res.json({ message: "Blog post removed successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};