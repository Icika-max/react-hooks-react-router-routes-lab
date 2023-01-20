import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles ={
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  colour: "white"
}
function NavBar() {
  return(
    <div>
      <NavLink
      to = "/"
      exact
      style={linkStyles}
      activeStyle={{
        backgroud: "darkblue"
      }}
      >Home</NavLink>

<NavLink
      to = "/movies"
      exact
      style={linkStyles}
      activeStyle={{
        backgroud: "darkblue"
      }}
      >Movies</NavLink>
      <NavLink
      to = "/directors"
      exact
      style={linkStyles}
      activeStyle={{
        backgroud: "darkblue"
      }}
      >Directors</NavLink>
      <NavLink
      to = "/actors"
      exact
      style={linkStyles}
      activeStyle={{
        backgroud: "green"
      }}
      >Actors</NavLink>




    </div>
  )
}

export default NavBar;
