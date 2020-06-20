import React from 'react';
import './StatefulApp.css';
import StatelessButton from './StatelessButton';


export default class StatefulApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      counter: null,
    }
  }

  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked,
      counter: this.state.counter + 1
    })
  }

  render() {
    const { isLiked, counter } = this.state;
    return (
      <div className='app'>
        <h2>React</h2>
        <p>{ isLiked ? '👍' : '👎'}</p>
        <p>counter: {counter}</p>

        <StatelessButton
          {...this.state}
          handleClick={this.handleClick}
          // alternatively...
          // handleClick={() => this.setState({
          //   isLiked: !this.state.isLiked,
          //   counter: this.state.counter + 1
          // })}
        />
      </div>
    )
  }
}
