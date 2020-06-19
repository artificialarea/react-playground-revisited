import React from 'react';
import './StatefulApp.css';
import StatelessButton from './StatelessButton';
// import Stateful from './Stateful';

export default class StatefulApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      count: 0
    }
  }

  handleUpdate = () => {
    console.log('handleUpdate')
    const { isLiked, count } = this.state;
    const newCount = count + 1;
    this.setState({
      isLiked: !isLiked,
      count: newCount
    })
  }


  render() {
    console.log(this.state.isLiked)
    const { isLiked, count } = this.state
    return (
      <div className="stateful">
        <h2>Like Stateful?</h2>
        <p className='emoji'>{ isLiked ? '👍' : '👎' }</p>
        <p>Counter: {count}</p>
        <StatelessButton 
          state={this.state}
          clickUpdate={() => this.handleUpdate()}
        />
      </div>
    )
  }
}
