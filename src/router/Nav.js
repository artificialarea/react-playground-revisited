import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
  
  const navChildren = props.list.map(item => (
    <li key={item.id}><NavLink to={`/child/${item.id}`}>{item.id}</NavLink></li>
  )) 

  return (
    <nav className='nav'>
      <h2>Nav Componenent</h2>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/child'>Child</NavLink></li> */}
        {navChildren}
        <li><NavLink to='/error'>Error</NavLink></li>
      </ul>
    </nav>
  )
}

Nav.defaultProps = {
  list: []
}