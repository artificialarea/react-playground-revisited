import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <h2>Navigation Component</h2>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/child'>Child</NavLink>
      <NavLink to='/error'>Error</NavLink>
    </nav>
  )
}