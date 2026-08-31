import React from 'react';
import MovieRow from '../component/MovieRow';
import { requests } from '../services/movieApi';

const TVShows = ({ onOpenModal }) => {
  return (
    <div className="pt-24 pb-16 space-y-4">
      <h1 className="px-4 text-3xl font-extrabold text-white md:px-12 md:text-5xl">
        TV Shows
      </h1>
      <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Trending TV Shows"
        fetchUrl={requests.fetchTrending}
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Top Rated TV"
        fetchUrl={requests.fetchTopRated}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default TVShows;