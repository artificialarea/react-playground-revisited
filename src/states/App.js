import React from 'react';
import './App.css';
import Stateless from './Stateless';
import Stateful from './Stateful';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Stateless />
        <Stateful />
      </div>
    )
  }
}
