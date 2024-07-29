// HomePage.jsx

import { useState, useEffect } from "react";
import { fetchTrendingMovies } from '../../api/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  //! Виклик хука useEffect з функцією і порожнім масивом залежностей [](API).
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;