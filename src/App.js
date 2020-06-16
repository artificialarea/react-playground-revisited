import React from 'react';
import './App.css';
import Button from './Button'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      touched: false
    }
  }

  handleClick = (value) => {
    console.log('clicked')
    // getting some info from event 

    // setState
    this.setState({
      isLiked: !this.state.isLiked,
      touched: true
    })


  }

  render() {
    const { isLiked } = this.state;

    let content;
    if (isLiked) {
      content = "indeed"
    } else {
      content = "nay"
    }

    return (
      <div>
        <h1>Testing...</h1>

        <Button 
          onClick = {(value) => this.handleClick(value)}
          label = 'click me'
        />
        {/* context */}
        {this.state.touched && <p>{content}</p>}
      </div>
    )
  }
}
