import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
  <Link to={`/movie/:${movie.id}`}>

  </Link>
  );
};

export default MovieCard;
