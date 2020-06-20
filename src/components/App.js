import React from 'react';
import './App.css';
import Button from './Button';


export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Button onClick={() => console.log('Click')} />
      </div>
    )
  }
}
