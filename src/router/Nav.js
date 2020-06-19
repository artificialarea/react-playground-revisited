import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {

  const {children} = props;
  const childrenNav = children.map((child, index) => (
    <p><NavLink key={index} to={`/child/${child.id}`}>{child.id}</NavLink></p>
  ));
  return (
    <div className='nav'>
      <h2>Nav Node</h2>
      <p><NavLink to='/'>Home</NavLink></p>
      {/* <p><NavLink to='/child'>Child</NavLink></p> */}
      {childrenNav}
      <p><NavLink to='/error'>Error</NavLink></p>
    </div>
  )
}