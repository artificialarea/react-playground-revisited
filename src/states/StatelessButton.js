import React from 'react'


export default function StatelessButton(props) {
  const { isLiked } = props.state;
  // console.log(props)
  return (
    <>
      <button
        onClick={() => props.clickUpdate()}
      >
        {isLiked ? 'dislike?' : 'like?'}
      </button>
    </>
  )
}
