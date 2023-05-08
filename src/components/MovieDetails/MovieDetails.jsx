import PropTypes from 'prop-types';

import { DetailsWrap, DetailsSubwrap } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = ({ movie }) => {
  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;

  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_29046.png';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!original_title) {
    return <Loader />;
  }

  return (
    <DetailsWrap>
      <img src={moviePoster} alt={`${original_title} poster`} width="240" />
      <DetailsSubwrap>
        {' '}
        <h3>
          {original_title ?? 'Unknown'} ({releaseYear})
        </h3>
        <p>Score: {userScore}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres && genres.length > 0 && (
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        )}
      </DetailsSubwrap>
    </DetailsWrap>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieDetails;
