import React from 'react';
import PropTypes from 'prop-types';

function Stateless({ name }) { // instead of Stateless(props)
  // const { name } = props
  return (
    <div>
      Hello {name}
    </div>
  )
}

Stateless.defaultProps = { name: 'World'};
Stateless.propTypes = { name: PropTypes.string} 
// ^^ prerequisites: $ npm install prop-types + import

export default Stateless