import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchMoviesByKeyword from 'services/fetchMoviesByKeyword';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // получаем значение поискового запроса из хука useSearchParams,
  // в коториьlй мьl передали из handleFormSubmit -> из Serchbar - handleSubmit - onSubmit(search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchMoviesByKeyword(query);

        if (moviesData.length === 0) {
          return alert('No movies by your query');
        }

        setMovies(moviesData);
      } catch (error) {
        console.error(error);
        alert('Something went wrong');
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

      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
