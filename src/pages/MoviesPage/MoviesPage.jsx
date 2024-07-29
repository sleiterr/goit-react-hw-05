import { useState } from "react";
import { searchMovies } from '../../api/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };
  
  return (
    <div className={styles.container }>
      <form onSubmit={handleSubmit} className={styles.form} >
        <input type="text" value={query} onChange={handleChange} className={ styles.input} />
        <button type="submit" className={ styles.button}>Search</button>
    </form>
    <MovieList movies={movies}/>
    </div>
  );

};

export default MoviesPage;