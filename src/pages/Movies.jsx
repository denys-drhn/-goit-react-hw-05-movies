import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchMoviesByKeyword from 'services/fetchMoviesByKeyword';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ''; // получаем значение поискового запроса из хука useSearchParams

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

  const handleFormSubmit = () => {
    setMovies([]); // для очистки массива фильмов перед выполнением нового поискового запроса
  };

  return (
    <div>
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
      </div>

      <MoviesList movies={movies} location={location} />
    </div>
  );
};
export default Movies;
