import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Child(props) {
  // console.log(props)
  const theChild = props.list.find(child => (  // had issue with using .filter instead of .find method
    child.id === props.match.params.childId
  ))
  // console.log(theChild)
  
  if (!theChild) {
    return <Redirect to='/child-error' />
  }
  return (
    <div className={`child child__${theChild.id}`}>
      <h2>{theChild.id} Node</h2>
      <p>{theChild.content}</p>
      {/* Note: programmable navigation with 'history' route prop */}
      <button
        onClick={() => props.history.push('/')}
      >
        Go Home
      </button>
    </div>
  )
}