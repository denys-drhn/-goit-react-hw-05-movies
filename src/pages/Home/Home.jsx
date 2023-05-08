import { useState, useEffect } from 'react';
import fetchTrendingMovies from '../../services/fetchTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { InfinitySpin } from 'react-loader-spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
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
export default Home;
