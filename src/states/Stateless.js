import React from 'react'
import { PropTypes } from 'prop-types'

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
Stateless.propTypes = { 
  noun: PropTypes.string
}