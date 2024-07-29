// MovieDetailsPage

import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdbApi";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.button}>
        Go back
      </button>
      <h2 className={styles.title}>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className={styles.image}
      />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
