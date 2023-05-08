import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovieReviews from '../../services/fetchMovieReviews';
import { InfinitySpin } from 'react-loader-spinner';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <div>
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found</p>
      )}
    </div>
  );
};

export default Reviews;
