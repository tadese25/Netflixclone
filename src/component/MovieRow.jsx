import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieRow = ({ title, fetchUrl, isLargeRow = false, onOpenModal }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error(`Error fetching row ${title}:`, error);
      }
    };
    fetchData();
  }, [fetchUrl, title]);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 px-4 md:px-12 my-6">
      <h2 className="text-lg font-bold text-white md:text-2xl">{title}</h2>
      <div className="group relative">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 m-auto h-12 w-10 cursor-pointer opacity-0 transition group-hover:opacity-100 bg-black/60 rounded-r flex items-center justify-center hover:bg-black/80"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        <div
          ref={rowRef}
          className="flex items-center space-x-2.5 overflow-x-scroll scrollbar-hide py-4"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isLargeRow={isLargeRow}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 m-auto h-12 w-10 cursor-pointer opacity-0 transition group-hover:opacity-100 bg-black/60 rounded-l flex items-center justify-center hover:bg-black/80"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;