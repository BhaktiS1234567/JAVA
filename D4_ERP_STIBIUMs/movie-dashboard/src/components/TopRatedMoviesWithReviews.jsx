import React, { useEffect, useState } from "react";
import bgImage from "C://Users//Bhakti//OneDrive//Desktop//D4_ERP_STIBIUM//movie-dashboard//src//assets//bg.jpg";

const TopRatedMoviesWithReviews = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState({});
  const [openReviews, setOpenReviews] = useState({});
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

  const handleToggleReviews = async (movieId) => {
    if (openReviews[movieId]) {
      setOpenReviews((prev) => ({ ...prev, [movieId]: false }));
      return;
    }

    if (!reviews[movieId]) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        const data = await response.json();
        setReviews((prev) => ({
          ...prev,
          [movieId]: data.results,
        }));
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    }

    setOpenReviews((prev) => ({ ...prev, [movieId]: true }));
  };

  if (loading) return <p>Loading top-rated movies...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "200%", paddingTop: "1rem" }}>
        Top Rated Movies
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "250px",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "#fff",
              overflow: "hidden",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "150px",
                height: "225px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>
              {movie.title}
            </h3>
            <p style={{ margin: "0.25rem 0" }}>⭐ {movie.vote_average}</p>
            <p style={{ margin: "0.25rem 0" }}>📅 {movie.release_date}</p>

            <button
              onClick={() => handleToggleReviews(movie.id)}
              style={{
                marginTop: "0.5rem",
                cursor: "pointer",
                padding: "0.4rem 0.6rem",
                borderRadius: "4px",
                border: "none",
                background: openReviews[movie.id] ? "#DC3545" : "#007BFF",
                color: "#fff",
                transition: "background 0.3s",
              }}
            >
              {openReviews[movie.id] ? "Hide Reviews" : "Show Reviews"}
            </button>

            {/* Reviews Overlay — appears on top of card */}
            {openReviews[movie.id] && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.95)",
                  borderRadius: "8px",
                  zIndex: 5,
                  padding: "0.8rem",
                  overflowY: "auto",
                  animation: "fadeIn 0.3s ease-in-out",
                }}
              >
                <h4 style={{ margin: "0.5rem 0", textAlign: "center" }}>
                  Reviews
                </h4>
                <button
                  onClick={() =>
                    setOpenReviews((prev) => ({ ...prev, [movie.id]: false }))
                  }
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "8px",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                >
                  ✖
                </button>

                {reviews[movie.id] && reviews[movie.id].length > 0 ? (
                  reviews[movie.id].map((rev) => (
                    <div
                      key={rev.id}
                      style={{
                        marginBottom: "0.5rem",
                        background: "#222",
                        padding: "0.5rem",
                        borderRadius: "5px",
                        color: "#f8f9fa",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ color: "#ffc107" }}>{rev.author}</strong>
                      <p style={{ margin: "0.25rem 0" }}>{rev.content}</p>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: "center" }}>No reviews available.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default TopRatedMoviesWithReviews;
