import React from 'react';
import { Play, Info } from 'lucide-react';
import { IMAGE_BASE_URL } from '../services/movieApi';

const Hero = ({ movie, onOpenModal }) => {
  if (!movie) return null;

  const backdrop = movie.backdrop_path || movie.poster_path;

  return (
    <header className="relative h-[80vh] w-full overflow-hidden text-white md:h-[88vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${IMAGE_BASE_URL}${backdrop}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-end px-4 pb-20 md:px-12 md:pb-28">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-300">New & trending</p>

        <h1 className="text-4xl font-black tracking-tight md:text-6xl">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-200 md:text-lg">
          {movie.overview?.slice(0, 180)}
          {movie.overview?.length > 180 ? '...' : ''}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => onOpenModal && onOpenModal(movie)}
            className="flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/80 md:text-base"
          >
            <Play className="h-4 w-4 fill-black" />
            Play
          </button>

          <button
            onClick={() => onOpenModal && onOpenModal(movie)}
            className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-500/50 md:text-base"
          >
            <Info className="h-4 w-4" />
            More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
