import React, { useState, useEffect } from 'react';
import Hero from '../component/Hero';
import MovieRow from '../component/MovieRow';
import { requests } from '../services/movieApi';

const Home = ({ onOpenModal }) => {
  const [heroMovie, setHeroMovie] = useState(null);

  useEffect(() => {
    const fetchHeroMovie = async () => {
      try {
        const response = await fetch(requests.fetchNetflixOriginals);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const randomMovie =
            data.results[Math.floor(Math.random() * data.results.length)];
          setHeroMovie(randomMovie);
        }
      } catch (error) {
        console.error('Error fetching hero movie:', error);
      }
    };
    fetchHeroMovie();
  }, []);

  return (
    <div className="relative pb-24">
      <Hero movie={heroMovie} onOpenModal={onOpenModal} />
      <div className="-mt-12 relative z-20 space-y-4 md:-mt-24">
        <MovieRow
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          onOpenModal={onOpenModal}
        />
        <MovieRow
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          onOpenModal={onOpenModal}
        />
        <MovieRow
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          onOpenModal={onOpenModal}
        />
        <MovieRow
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          onOpenModal={onOpenModal}
        />
        <MovieRow
          title="Comedies"
          fetchUrl={requests.fetchComedyMovies}
          onOpenModal={onOpenModal}
        />
        <MovieRow
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          onOpenModal={onOpenModal}
        />
      </div>
    </div>
  );
};

export default Home;