import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav(props) {

  const navChildren = props.children.map(child => 
    <NavLink to={`/child/:childId`}>{child.name}</NavLink>
  )

  return (
    <div className='nav'>
      <h2> Nav Node</h2>
      <NavLink to='/'>Home</NavLink>
      {/* <NavLink to='/child'>Child</NavLink> */}
      {navChildren}
      <NavLink to='/error'>Error</NavLink>
    </div>
  )
}