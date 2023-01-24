import React from "react";
import { actors } from "../data";

function Actors() {
  const newActors = actors.map((actor, index) =>{
    return(
      <div key={index}>
        <h1>{actor.name}</h1>
        <ul>
          <li>{actor.movies}</li>
        </ul>
      </div>
    )
  })
  
  return(
    <div>
      <h1>Actors page</h1>
      {newActors}
    </div>
  )
  }

export default Actors;
