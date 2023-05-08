import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/tmdbAPI';
import MovieList from 'components/MovieList/MovieList';
import { MovieListTitle } from 'components/MovieList//MovieList.styled';
// import Section from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []); //завантаження трендових фільмів

  return (
    <main>
      <MovieListTitle>Trending today</MovieListTitle>
      {error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : null}
      {isLoading ? <Loader /> : <MovieList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
