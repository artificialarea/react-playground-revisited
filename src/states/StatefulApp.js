import React from 'react';
import './StatefulApp.css';
import StatelessButton from './StatelessButton';
import { PropTypes } from 'prop-types'

export default class StatefulApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      count: 0
    }
  }

  handleUpdate = () => {
    const { isLiked, count } = this.state;
    const newCount = count + 1;
    this.setState({
      isLiked: !isLiked,
      count: newCount
    })
  }


  render() {
    const { isLiked, count } = this.state
    return (
      <div className="stateful">
        <h2>{this.props.headline}</h2>
        <p className='emoji'>{ isLiked ? '👍' : '👎' }</p>
        <p>Click Counter: <b>{count}</b></p>

        <StatelessButton 
          state={this.state}
          clickUpdate={() => this.handleUpdate()}
        />
      </div>
    )
  }
}

StatefulApp.defaultProps = {
  headline: 'Like Stateful?'
}

StatefulApp.propTypes = {
  headline: PropTypes.string
}