import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchMoviesByKeyword from 'services/fetchMoviesByKeyword';
import MoviesList from 'components/MoviesList/MoviesList';
import { InfinitySpin } from 'react-loader-spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // получаем значение поискового запроса из хука useSearchParams,
  // в коториьlй мьl передали из handleFormSubmit -> из Serchbar - handleSubmit - onSubmit(search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true); // показываем loader
        const moviesData = await fetchMoviesByKeyword(query);

        if (moviesData.length === 0) {
          return alert('No movies by your query');
        }

        setMovies(moviesData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // скрываем loader
      }
    };

    if (query === '') {
      return;
    }

    fetchMovies();
  }, [query]);

  const handleFormSubmit = search => {
    setSearchParams({ query: search });
  };

  return (
    <div>
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
      </div>

      {isLoading ? (
        <div className="loader">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <MoviesList movies={movies} />
      )}
      {error && <p>Something went wrong...</p>}
    </div>
  );
};
export default Movies;
