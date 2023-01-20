import React from "react";
import { actors, movies } from "../data";

function Actors() {
  
  return(
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,index)=>(
        <div>
          <h2>{actor.name}</h2>
          <ul>
            {movies.map((movie, index)=>(
            <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}


    </div>
  )
}

export default Actors;
