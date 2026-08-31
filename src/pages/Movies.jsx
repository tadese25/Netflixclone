import React from 'react';
import MovieRow from '../component/MovieRow';
import { requests } from '../services/movieApi';

const Movies = ({ onOpenModal }) => {
  return (
    <div className="pt-24 pb-16 space-y-4">
      <h1 className="px-4 text-3xl font-extrabold text-white md:px-12 md:text-5xl">
        Movies
      </h1>
      <MovieRow
        title="Top Rated Classics"
        fetchUrl={requests.fetchTopRated}
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Action Blockbusters"
        fetchUrl={requests.fetchActionMovies}
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Comedy Hits"
        fetchUrl={requests.fetchComedyMovies}
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Horror & Thrillers"
        fetchUrl={requests.fetchHorrorMovies}
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        onOpenModal={onOpenModal}
      />
      <MovieRow
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default Movies;