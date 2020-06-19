import React from 'react';
import './StatefulApp.css';
import StatelessButton from './StatelessButton';


export default class StatefulApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      counter: null
    }
  }

  handleClick = () => {
    const newCounter = this.state.counter + 1
    this.setState({
      isLiked: !this.state.isLiked,
      counter: newCounter
    })
  }

  render() {
    const { isLiked, counter } = this.state
    return (
      <div>
        <h2>Like Statefulness?</h2>
        <p>{ isLiked ? '👍' : '👎'}</p>
        <p>click counter: {counter}</p>
        <StatelessButton 
          {...this.state}
          word='like?'
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}
