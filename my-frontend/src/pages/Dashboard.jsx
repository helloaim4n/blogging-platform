import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Link to="/blog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Blog
      </Link>
    </div>
  );
}

export default Dashboard;


