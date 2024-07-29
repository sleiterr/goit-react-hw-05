// MovieDetailsPage.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
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
      <div className={styles.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
        <div className={styles.details}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.textview}>{movie.overview}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3 className={styles.infoTitle}>Additional information</h3>
        <nav className={styles.navigation}>
          <Link to="cast" className={styles.link}>
            Cast
          </Link>
          <Link to="reviews" className={styles.link}>
            Reviews
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
