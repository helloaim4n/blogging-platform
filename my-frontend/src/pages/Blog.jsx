import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to my blog!</h1>
      <p className="text-lg">This is the blog page.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:text-blue-800">Go back to home</Link>
    </div>
  );
}

export default Blog;

