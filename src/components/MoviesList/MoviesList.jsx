import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, original_title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      original_title: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
