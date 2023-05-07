import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTrendingMovies from '../services/fetchTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};
export default Home;
