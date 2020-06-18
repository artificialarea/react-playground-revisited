import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
      <h2>Nav Node</h2>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/child'>Child</NavLink>
      <NavLink to='/error'>Error</NavLink>
    </div>
  )
}