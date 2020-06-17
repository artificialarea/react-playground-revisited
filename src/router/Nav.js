import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <h2>Nav Componenent</h2>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/child'>Child</NavLink></li>
        <li><NavLink to='/error'>Error</NavLink></li>
      </ul>
    </nav>
  )
}