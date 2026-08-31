import React from 'react';
import { X, Play, Plus, ThumbsUp, Star } from 'lucide-react';
import { IMAGE_BASE_URL } from '../services/movieApi';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-[#181818] text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/70 p-2 hover:bg-black"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <div className="relative h-72 md:h-96">
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title || movie.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 space-y-3">
            <h2 className="text-2xl font-bold md:text-4xl">
              {movie.title || movie.name}
            </h2>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 rounded bg-white px-6 py-2 text-black transition hover:bg-gray-200 font-semibold">
                <Play className="h-5 w-5 fill-black" />
                <span>Play</span>
              </button>
              <button className="flex items-center justify-center rounded-full border border-gray-500 bg-black/40 p-2 hover:border-white">
                <Plus className="h-5 w-5 text-white" />
              </button>
              <button className="flex items-center justify-center rounded-full border border-gray-500 bg-black/40 p-2 hover:border-white">
                <ThumbsUp className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span className="font-semibold text-green-500">98% Match</span>
            <span>{movie.release_date || movie.first_air_date}</span>
            <span className="flex items-center space-x-1">
              <span>{movie.vote_average?.toFixed(1)}</span>
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-200 md:text-base">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;