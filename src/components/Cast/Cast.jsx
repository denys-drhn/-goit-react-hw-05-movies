import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovieCredits from '../../services/fetchMovieCredits';
import css from './Cast.module.css';
import IMAGE_DEFAULT_URL from '../../images/default-profile.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      const movieCast = await fetchMovieCredits(movieId);
      setCast(movieCast);
    };

    getMovieCast();
  }, [movieId]);

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <ul className={css.castList}>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          <img
            className={css.castImg}
            src={
              profile_path ? IMAGES_BASE_URL + profile_path : IMAGE_DEFAULT_URL
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
