import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/blogs");
        setBlogList(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // const viewPost = (_id) => {
  //   navigate(`/blogs/${_id}`);
  //   console.log(`Viewing post with id: ${_id}`);
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center mx-auto">
          <thead className="bg-blue-500 text-white ">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Content</th>
              <th className="px-4 py-2">Published Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogList.map((post) => {
              return (
                <tr
                  key={post._id}
                  className="border-b border-gray-200 bg-gray-50"
                >
                  <td className="px-4 py-2">{post.title}</td>
                  <td className="px-4 py-2">{post.author}</td>
                  <td className="px-4 py-2">{post.content}</td>
                  <td className="px-4 py-2">{post.publishedDate}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/blogs/${post._id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Post
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogList;
