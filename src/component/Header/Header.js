import { NavLink } from "react-router-dom";
import "./Header.css";

import React from "react";

export default function Header() {
  return (
    <div className="navs">
      <div className="rightOnNav">
        <h1>What To Listen</h1>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/Instruments">Instruments</NavLink>
        <NavLink to="/About">About</NavLink>
      </div>
    </div>
  );
}
