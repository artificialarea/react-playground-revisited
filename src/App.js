import React from 'react';
import './App.css';
import tabstore from './tabstore';
import Tabs from './Tabs';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tabstore
    }
  }

  handleClick = (index) => {
    console.log(index);
    this.setState({
      contentIndex: index,
      touched: true
    })
  }

  render() {
    return (
      <Tabs 
        tabs={this.state.tabstore}
      />
    )
  }
}
