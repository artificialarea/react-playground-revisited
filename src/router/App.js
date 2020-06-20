import React from 'react';
import './App.css';
import Home from './Home'
import Child from './Child'
import Error from './Error'
import Nav from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import children from './store'


export default class App extends React.Component {

  state = { children }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Nav children={this.state.children} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route 
              path='/child/:childId' 
              // component={Child} 
              render={(props) => (
                <Child 
                  {...props} 
                  children={this.state.children}
                /> 
              )}
            />
            <Route path='/error' component={Error} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}
