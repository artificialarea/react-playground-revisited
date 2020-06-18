import React from 'react';
import './App.css';
import Home from './Home';
import Child from './Child';
import Error from './Error';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>React Router Practice v5</h1>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/child' component={Child} />
            <Route path='/error' component={Error} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
