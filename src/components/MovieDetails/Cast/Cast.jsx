import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/tmdbAPI';
import { CastWrapper, ActorCard, ActorInfo, CastHeader } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {error ? <div>An error occurred, please try again later...</div> : null}
      {isLoading ? <Loader /> : null}
      {cast.length ? (
        <div>
          <CastHeader>Cast</CastHeader>

          <CastWrapper>
            {cast.map(actor => {
              return (
                <ActorCard key={actor.credit_id}>
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={`${actor.name}`}
                    />
                  ) : (
                    <img
                      src={`https://i.stack.imgur.com/q89AO.jpg`}
                      alt={`${actor.name} profile`}
                      width={'200px'}
                    />
                  )}
                  <ActorInfo>
                    <h4> {actor.name}</h4>
                    <p>Character: {actor.character}</p>
                  </ActorInfo>
                </ActorCard>
              );
            })}{' '}
          </CastWrapper>
        </div>
      ) : (
        <h3>We don't have any information about the cast yet.</h3>
      )}
    </>
  );
};

export default Cast;
