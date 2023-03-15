import React, { useState, useEffect } from "react";
import "./Categories.css";
import { NavLink, Link } from "react-router-dom";
import Details from "../Details";
import DataCategories from "../Data";

export default function Categories() {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // const handleCategoryClick = (e) => {
  //   console.log("mmm", e.target.value);
  //   setSelectedCategory(e);
  // };

  return (
    // <NavLink to={`/Details`}>
    <div className="boxes">
      {Object.keys(DataCategories).map((key) => (
        <li className="box1">
          <Link to={`/details/${key}`}>{DataCategories[key].title}</Link>
        </li>
      ))}
      {/* <input className="box1" value="ambasel" onClick={handleCategoryClick}/>
        <button className="box1">Bati</button>
        <button className="box1">Anchihoye</button>
        <button className="box1">Tizita</button> */}
    </div>

    // </NavLink>
  );
}
