import React, { useState, useEffect } from "react";

import "./index.css";

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div className="movie-card">
      <img src={dogImage} alt="Random Dog" className="dog-img" />
      <h2>{movie.title}</h2>
      <p>{movie.author_name && movie.author_name.join(", ")}</p>
      <p>{movie.first_publish_year}</p>
    </div>
  );
};

export default MovieCard;
