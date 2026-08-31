import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Search from './pages/Search';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';

// Components
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import MovieModal from './component/MovieModal';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const location = useLocation();

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  // Conditionally hide Navbar and Footer on authentication screen
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#141414] text-white selection:bg-red-600 selection:text-white">
      {!isLoginPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
          <Route path="/movies" element={<Movies onOpenModal={handleOpenModal} />} />
          <Route path="/tv" element={<TVShows onOpenModal={handleOpenModal} />} />
          <Route path="/search" element={<Search onOpenModal={handleOpenModal} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}

      {/* Global Movie Quick Preview Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;