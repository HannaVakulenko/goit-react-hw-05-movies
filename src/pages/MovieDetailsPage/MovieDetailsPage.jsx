import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/tmdbAPI';
import Section from 'components/Section/Section';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import {
  StyledLink,
  ButtonWrap,
  StyledBackLink,
} from './MovieDetailsPage.styled';
import { HiArrowLeft } from 'react-icons/hi';
import { Loader } from 'components/Loader/Loader';
import { useRef } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentMovie, setCurrentMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const backLinkPath = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        setError(false);
        setIsLoading(true);

        const fetchedMovieById = await fetchMovieDetailsById(movieId);

        setCurrentMovie(fetchedMovieById);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <main>
      <Section>
        <StyledBackLink to={backLinkPath.current}>
          <HiArrowLeft size="24" />
          Go back
        </StyledBackLink>

        {error ? <div>An error occurred, please try again later...</div> : null}

        {isLoading ? <Loader /> : <MovieDetails movie={currentMovie} />}

        <ButtonWrap>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </ButtonWrap>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </Section>
    </main>
  );
};

export default MovieDetailsPage;
