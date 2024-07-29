// MovieCast

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api/tmdbApi";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Cast</h3>
      <ul className={styles.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.item}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              className={styles.image}
            />
            <p className={styles.name}>{actor.name}</p>
            <p className={styles.character}>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
