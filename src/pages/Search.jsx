import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../component/MovieCard';
import { requests } from '../services/movieApi';

const Search = ({ onOpenModal }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(requests.fetchSearch(query));
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="pt-28 px-4 md:px-12 min-h-screen text-white">
      <h1 className="text-xl font-bold md:text-3xl mb-6">
        Search Results for: <span className="text-red-500">"{query}"</span>
      </h1>

      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {results.map(
            (movie) =>
              (movie.poster_path || movie.backdrop_path) && (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onOpenModal={onOpenModal}
                />
              )
          )}
        </div>
      ) : (
        <p className="text-gray-400">No titles found matching your search.</p>
      )}
    </div>
  );
};

export default Search;