import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const result = await searchMovies(query);
        setMovies(result);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
  }, [query]);

  const handleSearch = () => {
    setSearchParams({ query });
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
