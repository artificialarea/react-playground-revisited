import React from 'react'
import { PropTypes } from 'prop-types'

export default function StatelessButton(props) {
  
  return (
    <button
      onClick={() => props.handleClick()}
    >
      { !props.isLiked ? props.word : 'dislike?'}
    </button>
  )
}


StatelessButton.defaultProps = {
  word: 'test',
  isLiked: false,
}

StatelessButton.propTypes = {
  word: PropTypes.string,
  isLiked: PropTypes.bool
}