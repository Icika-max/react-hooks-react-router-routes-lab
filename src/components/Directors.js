import React from "react";
import { directors } from "../data";

function Directors() {
  const newDirectors = directors.map((director, index) => {
    return (
      <div key={index}>
        <h1>{director.name}</h1>
        <ul>
          <li>{director.movies}</li>
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {newDirectors}
    </div>
  );
}

export default Directors;