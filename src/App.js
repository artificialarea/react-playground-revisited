import React from 'react';
import './App.css';
import tabstore from './tabstore';
import Tabs from './Tabs';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      tabstore,
      contentIndex: 0, 
    }
  }

  handleClick = (index) => {
    console.log(index);
    this.setState({
      contentIndex: index
    })
  }

  render() {
    // console.log(this.state.tabstore)
    return (
      <Tabs 
        tabs={this.state.tabstore}
        contentIndex = {this.state.contentIndex}
        onClick={(index) => this.handleClick(index)}
      />
    )
  }
}
