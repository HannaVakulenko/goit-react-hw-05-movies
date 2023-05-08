import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Section from 'components/Section/Section';

import {
  ListOfMovies,
  ListItem,
  LinkMovie,
  LinkMovieInfo,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Section>
      <ListOfMovies>
        {movies.map(movie => {
          const moviePoster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
            : 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_29046.png';

          return (
            <ListItem key={movie.id}>
              <LinkMovie to={`/movies/${movie.id}`} state={{ from: location }}>
                <img src={moviePoster} alt={movie.original_title} width="240" />
                <LinkMovieInfo>{movie.title ?? movie.name}</LinkMovieInfo>
              </LinkMovie>
            </ListItem>
          );
        })}
      </ListOfMovies>
    </Section>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
