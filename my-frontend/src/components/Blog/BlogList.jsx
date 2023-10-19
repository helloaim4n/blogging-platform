import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogList() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/blogs");
        console.log(response.data);
        setBlogList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const viewPost = (id) => {
    // Your logic for viewing a post goes here
    console.log(`Viewing post with id: ${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Published Date</th>
            <th>Content</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.publishedDate}</td>
                <td>{post.author}</td>
                <td>{post.content}</td>
                <td>
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => viewPost(post.id)}
                  >
                    View Post
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
