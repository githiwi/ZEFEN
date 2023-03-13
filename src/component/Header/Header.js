import { NavLink } from "react-router-dom";

import React from 'react'

export default function Header() {
  return (
    <div>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/Categories">Categories</NavLink>
        <NavLink to = "/Instruments">Instruments</NavLink>
        <NavLink to = "/About">About</NavLink>
        
    </div>
  )
}

