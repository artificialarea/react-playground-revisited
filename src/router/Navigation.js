import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navigation() {
  return (
    <nav>
      <h2>Nav Component</h2>
      <NavLink to='/'><h3>Home</h3></NavLink>
      <NavLink to='/child'><h3>Child</h3></NavLink>
      <NavLink to='/blah'><h3>Error</h3></NavLink>
    </nav>
  )
}