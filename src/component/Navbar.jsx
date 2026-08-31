import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Bell, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-colors duration-500 md:px-12 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="flex items-center space-x-8">
        <Link to="/">
          <span className="text-2xl font-black tracking-widest text-red-600 md:text-3xl">
            NETFLIX
          </span>
        </Link>
        <div className="hidden space-x-6 text-sm font-medium text-gray-200 md:flex">
          <Link to="/" className="transition hover:text-gray-400">Home</Link>
          <Link to="/tv" className="transition hover:text-gray-400">TV Shows</Link>
          <Link to="/movies" className="transition hover:text-gray-400">Movies</Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          {showSearchInput ? (
            <input
              type="text"
              placeholder="Titles, people, genres"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => !searchQuery && setShowSearchInput(false)}
              autoFocus
              className="w-40 rounded bg-black/70 px-3 py-1 text-sm text-white border border-gray-600 focus:outline-none md:w-60"
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowSearchInput(true)}
              className="text-white hover:text-gray-300"
              aria-label="Search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          )}
        </form>

        <Bell className="h-5 w-5 cursor-pointer text-white hover:text-gray-300" />

        {user ? (
          <div className="group relative flex items-center space-x-2 cursor-pointer">
            <img
              src={user.profile_img || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
              alt="Avatar"
              className="h-8 w-8 rounded object-cover"
            />
            <div className="absolute right-0 top-full hidden w-32 rounded bg-black/90 p-2 text-sm text-white group-hover:block">
              <button
                onClick={logout}
                className="w-full text-left hover:text-red-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="rounded bg-red-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;