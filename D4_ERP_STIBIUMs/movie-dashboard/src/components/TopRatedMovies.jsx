// TopRatedMovies.jsx
import React, { useEffect, useState } from "react";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "df62d37b17c7e916fabda2c12daab4b9";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`
        );
        const data = await response.json();
        if (!data.results) throw new Error("Failed to fetch movies");
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading top-rated movies...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>Release: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
