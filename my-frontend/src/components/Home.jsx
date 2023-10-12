function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to My Blogging Platform
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a platform where you can create and share your own blogs.
      </p>
      <a
        href="/blog"
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Check out the latest blogs
      </a>
    </div>
  );
}

export default Home;
