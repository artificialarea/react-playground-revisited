import React from 'react';
import './App.css';
import Home from './Home'
import Child from './Child'
import Error from './Error'
import Nav from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import list from './store'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { list }
  }

  render() {
    console.log(this.state.list)
    return (
      <div className='app'>
        <h1>React Router Practice v3</h1>
        
        <BrowserRouter>
          <Nav list={this.state.list}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/child/:childId' component={Child} /> 
            <Route path='/error' component={Error} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
