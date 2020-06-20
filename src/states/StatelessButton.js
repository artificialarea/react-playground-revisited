import React from 'react'


export default function StatelessButton(props) {
  return (
    <button
      onClick={() => props.handleClick()}
    >
      { !props.isLiked ? 'like?' : 'dislike?'}
    </button>
  )
}
