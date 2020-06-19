import React from 'react'

export default class Stateful extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
      count: 0
    }
  }
  render() {
    const { isLiked, count } = this.state
    return (
      <div className="stateful">
        <h2>Like Stateful?</h2>
        <p className='emoji'>{ isLiked ? '👍' : '👎' }</p>
        <p>Counter: {count}</p>
        <button
          onClick={() => {
            const newCount = count + 1;
            this.setState({
              isLiked: !isLiked,
              count: newCount
            })
          }}
        >
          { isLiked ? 'dislike?' : 'like?'}
        </button>
      </div>
    )
  }
}