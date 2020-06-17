import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
  console.log(props);
  const navChildren = props.children.map(child => (
    <NavLink key={child.id} to={`/child/${child.id}`}>{child.id}</NavLink>
  ))
  return (
    <nav className='nav'>
      <h2>Navigation Component</h2>
      <NavLink to='/'>Home</NavLink>
      {/* <NavLink to='/child'>Child</NavLink> */}
      {navChildren}
      <NavLink to='/error'>Error</NavLink>
    </nav>
  )
}