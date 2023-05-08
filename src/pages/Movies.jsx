import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMoviesByQueryName } from '../services/tmdbAPI';
import SearchBox from 'components/SearchBox/SearchBox';
import Section from 'components/Section/Section';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovieByQuery = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchMoviesByQueryName(query);

        if (results.length === 0) {
          toast.error('No movies found according to your request');
          setSearchedMovies([]);
        } else {
          setSearchedMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setError(true);
        setSearchedMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByQuery();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Section>
        <SearchBox onSubmit={handleSubmit} />{' '}
        {error ? <div>An error occurred, please try again later...</div> : null}
        {isLoading ? <Loader /> : <MovieList movies={searchedMovies} />}
      </Section>
    </main>
  );
};

export default Movies;
