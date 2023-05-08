import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovieCredits from '../../services/fetchMovieCredits';
import { InfinitySpin } from 'react-loader-spinner';
import css from './Cast.module.css';
import IMAGE_DEFAULT_URL from '../../images/default-profile.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieCast();
  }, [movieId]);

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <div>
      {loading ? (
        <div className={css.loader}>
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id}>
              <img
                className={css.castImg}
                src={
                  profile_path
                    ? IMAGES_BASE_URL + profile_path
                    : IMAGE_DEFAULT_URL
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast found</p>
      )}
    </div>
  );
};
export default Cast;
