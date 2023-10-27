import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    // Fetch the existing blog post data and populate the form
    axios
      .get(`http://127.0.0.1:5000/blogs/${id}`)
      .then((response) => {
        const blogData = response.data;
        setFormData({
          title: blogData.title,
          content: blogData.content,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated data to your backend for blog post editing
    axios
      .put(`http://127.0.0.1:5000/blogs/${id}`, formData)
      .then(() => {
        console.log("Blog post updated successfully");
        // Redirect to the blog post page after editing
        navigate(`/blogs/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Content:
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default BlogEditor;
