import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Star, Clock, Calendar } from 'lucide-react';
import { fetchDetails, IMAGE_BASE_URL } from '../services/movieApi';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) getMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#141414] text-white">
        <p className="animate-pulse text-lg">Loading details...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#141414] text-white space-y-4">
        <p className="text-lg">Movie not found.</p>
        <button
          onClick={() => navigate('/')}
          className="rounded bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const trailer = movie.videos?.results?.find(
    (vid) => vid.type === 'Trailer' || vid.type === 'Teaser'
  );

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-20 left-6 z-40 flex items-center space-x-2 rounded-full bg-black/60 px-4 py-2 text-sm backdrop-blur transition hover:bg-black/90"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </button>

      {/* Hero Backdrop */}
      <div className="relative h-[65vh] w-full">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
      </div>

      {/* Details Container */}
      <div className="-mt-32 relative z-10 px-6 md:px-16 space-y-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-black md:text-5xl drop-shadow-lg">
          {movie.title || movie.name}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
          <span className="flex items-center space-x-1 text-green-500 font-bold">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span>{movie.vote_average?.toFixed(1)} Rating</span>
          </span>
          <span className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{movie.release_date || movie.first_air_date}</span>
          </span>
          {movie.runtime && (
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{movie.runtime} min</span>
            </span>
          )}
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {movie.genres?.map((genre) => (
            <span
              key={genre.id}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed">
          {movie.overview}
        </p>

        {/* Trailer Video Player */}
        {trailer ? (
          <div className="mt-8 space-y-3">
            <h2 className="text-xl font-bold">Official Trailer</h2>
            <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
              <iframe
                title="Trailer"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0`}
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieDetails;