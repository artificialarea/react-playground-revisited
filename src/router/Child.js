import React from 'react'

export default function Child(props) {
  const { children } = props;
  const theChild = children.find(child => (
    child.id === props.match.params.childId
  ))

  return (
    <div className='child'>
      <h2>{theChild.id} Node</h2>
      <p>{theChild.content}</p>
    </div>
  )
}