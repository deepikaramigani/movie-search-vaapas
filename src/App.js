import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

import { Rings } from "react-loader-spinner";

import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setMovies(data.docs);
    } catch (error) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="heading-container">
        <h1 className="heading">Movie Search</h1>
        <SearchBar onSearch={fetchMovies} />
      </div>
      {loading && (
        <div className="products-loader-container">
          <Rings type="ThreeDots" color="black" height="50" width="50" />
          <p>Loading...</p>
        </div>
      )}
      {error && <p>Can't load the Data</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.key} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
