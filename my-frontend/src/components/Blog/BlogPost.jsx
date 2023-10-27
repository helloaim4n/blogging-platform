import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/blogs/${id}`);
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      {post ? (
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
          <p className="mb-2 text-gray-700">{post.content}</p>
          <div className="mb-4 text-sm text-gray-500">
            <p>Author: {post.author}</p>
            <p>Published on: {post.publishedDate}</p>
          </div>
          <Link
            to={`/edits/${id}`}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </Link>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default BlogPost;
