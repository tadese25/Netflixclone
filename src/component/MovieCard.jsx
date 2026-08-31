import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, Info, Star } from 'lucide-react';
import { THUMBNAIL_BASE_URL } from '../services/movieApi';

const MovieCard = ({ movie, isLargeRow, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imagePath = isLargeRow
    ? movie.poster_path
    : movie.backdrop_path || movie.poster_path;

  if (!imagePath) return null;

  return (
    <div
      className={`relative flex-none cursor-pointer rounded transition-transform duration-300 ${
        isHovered ? 'z-30' : 'z-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${THUMBNAIL_BASE_URL}${imagePath}`}
        alt={movie.title || movie.name}
        className={`rounded object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        } ${isLargeRow ? 'h-64 w-44 md:h-80 md:w-56' : 'h-32 w-56 md:h-40 md:w-72'}`}
        loading="lazy"
      />

      {isHovered && (
        <div className="absolute top-0 left-0 h-full w-full bg-[#181818] rounded-md shadow-2xl transition-all duration-300 transform scale-110 -translate-y-4 origin-center">
          <div className="relative h-1/2 w-full overflow-hidden rounded-t-md bg-[#333]">
            <img
              src={`${THUMBNAIL_BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.title || movie.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          </div>

          <div className="p-4 space-y-3">
            <h3 className="line-clamp-1 text-sm font-extrabold text-white">
              {movie.title || movie.name}
            </h3>

            <div className="flex items-center space-x-2">
              <button
                className="flex items-center justify-center rounded-full bg-white p-2 transition hover:bg-gray-200"
                onClick={() => onOpenModal(movie)}
                aria-label="Play"
              >
                <Play className="h-4 w-4 fill-black text-black"/>
              </button>
              <button className="flex items-center justify-center rounded-full border border-gray-600 bg-black/50 p-2 hover:border-white hover:bg-black/70">
                <Plus className="h-4 w-4 text-white"/>
              </button>
              <button className="flex items-center justify-center rounded-full border border-gray-600 bg-black/50 p-2 hover:border-white hover:bg-black/70">
                <ThumbsUp className="h-4 w-4 text-white"/>
              </button>
              <button className="flex items-center justify-center rounded-full border border-gray-600 bg-black/50 p-2 hover:border-white hover:bg-black/70">
                <Info className="h-4 w-4 text-white"/>
              </button>
            </div>

            <div className="text-xs text-gray-300">
              <span className="font-semibold text-green-500">97% Match</span>{' '}
              <span>
                {movie.vote_average?.toFixed(1)}{' '}
                <Star className="inline h-3 w-3 fill-yellow-500"/>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;