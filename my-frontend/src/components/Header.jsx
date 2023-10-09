import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link to="/">
            <img className="h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          </Link>
        </div>
        <div className="sm:hidden">
          <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path className="heroicon-ui"
                d="M4.5 6.5h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2zm0 5h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2zm0 5h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav className={`sm:flex sm:items-center sm:px-4 sm:py-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/"
          className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Home</Link>
        <Link to="/blog"
          className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Blog</Link>
        <Link to="/dashboard"
          className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;

