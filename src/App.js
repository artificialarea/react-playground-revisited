import React from 'react';
import './App.css';
import Stateful from './Stateful';
import Stateless from './Stateless';

// first-attempt: mimic marius example side-by-side

/* 

STATEFUL COMPONENT
- Internal State
- Component Lifecycle Hooks

Useful when...
- We need to have an internal state
- We need to perform an action when the component is mounted

- When you need internal state
-- D3 graph (data visualisations) https://d3js.org/

- When you need to utilize a Component Hook
-- AJAX request on mount
---- Setup animations
---- Access the raw DOM node for a 3rd party library

versus


STATELESS COMPONENT
- Used in most instances of a component
- Simple.
- Given some state (as props)... return some DOM (or additonal components)
- Pure

*/


class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Stateful name='Sacha' /> */}
        <Stateful />
        <br />
        {/* <Stateless name='Walter'/> */}
        <Stateless />
      </div>
      
    )
  }
}

export default App
