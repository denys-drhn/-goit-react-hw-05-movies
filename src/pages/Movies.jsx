import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchMoviesByKeyword from 'services/fetchMoviesByKeyword';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchMoviesByKeyword(query);

      if (moviesData.length === 0) {
        return alert('No movies by your query');
      }
      setMovies(moviesData);
    };
    if (query === '') {
      return;
    }
    fetchMovies();
  }, [query]);

  //////////////

  /////////////////////////////

  const handleFormSubmit = query => {
    setQuery(query);
    setMovies([]); // для очистки массива фильмов перед выполнением нового поискового запроса
  };

  return (
    <div>
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
      </div>
      {movies.length > 0 ? (
        <MoviesList movies={movies} location={location} />
      ) : (
        <p>No movies found</p>
      )}
      {/* <MoviesList movies={movies} location={location} /> */}
    </div>
  );
};
export default Movies;
