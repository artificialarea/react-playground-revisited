import React from 'react'
import { PropTypes } from 'prop-types'

export default function StatelessButton(props) {
  const { isLiked } = props;
  console.log(props)
  return (
    <>
      <button
        onClick={() => props.clickUpdate()}
      >
        { (isLiked === true) ? 'dislike?' : 'like?'}
      </button>
    </>
  )
}

StatelessButton.defaultProps = {
  word: 'like?'
}
// Stateless.propTypes = { 
//   noun: PropTypes.string
// }