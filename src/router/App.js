import React from 'react';
import './App.css';
import Error from './Error';
import Child from './Child';
import Home from './Home';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <h1>React Router Practice</h1>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/child' component={Child} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
