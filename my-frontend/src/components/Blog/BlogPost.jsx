import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const [blogPost, setBlogPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{blogPost.title}</h2>
      <p className="text-gray-600">{blogPost.content}</p>
      <div className="mt-4 text-sm text-gray-500">
        <p>Author: {blogPost.author}</p>
        <p>Published on: {blogPost.publishedDate}</p>
      </div>
    </div>
  );
}

export default BlogPost;
