import React from 'react';
import './App.css';
import Child from './Child'
import LangControls from './LangControls';

export default class App extends React.Component {

  state = {
    lang: window.navigator.language
  };

  render() {
    return (
      <div className='app'>
        <LangControls />
        <Child />
      </div>
    )
  }
}
