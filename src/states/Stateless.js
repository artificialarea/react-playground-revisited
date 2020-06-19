import React from 'react'

export default function Stateless(props) {
  return (
    <div className='stateless'>
      <h2>Hello {props.noun}! I'm stateless.</h2>
    </div>
  )
}

Stateless.defaultProps = {
  noun: 'World'
}