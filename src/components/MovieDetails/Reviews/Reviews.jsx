import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/tmdbAPI';
import { ReviewWrapper } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const fetchedReviews = await fetchMovieReviews(movieId);
        setMovieReviews(fetchedReviews);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {error ? <div>An error occurred, please try again later...</div> : null}
      {isLoading ? <Loader /> : null}

      {movieReviews.results?.map(review => {
        return (
          <ReviewWrapper key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </ReviewWrapper>
        );
      })}
    </div>
  );
};

export default Reviews;
