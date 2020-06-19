import React from 'react'
import { PropTypes } from 'prop-types'


export default function StatelessButton(props) {
  console.log(props)
  const { isLiked, word } = props
  return (
    <button
      onClick={() => props.handleClick()}
    >
      {isLiked ? 'dislike?' : word }
    </button>
  )
}

StatelessButton.defaultProps = {
  word: 'like?'
}
StatelessButton.propTypes = {
  word: PropTypes.string,
  isLiked: PropTypes.bool
}
