import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Child(props) {
  const { children } = props;
  const theChild = children.find(child => (
    child.id === props.match.params.childId
  ))
  
  if (!theChild) {
    return < Redirect to='/childid-error' />
  }

  return (
    <div className='child'>
      <h2>{theChild.name} Node</h2>
      <p>{theChild.content}</p>
      <button
        onClick={() => props.history.push('/')}
      >
        Go Home
      </button>
    </div>
  )
}