

import React from "react";
import { movies } from "../data";

function Movies() {
  const newMovies = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h1>{movie.title}</h1>
        <h4>{movie.time}</h4>
        <ul>
          <li>{movie.genres}</li>
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{newMovies}</div>
    </div>
  );
}

export default Movies;