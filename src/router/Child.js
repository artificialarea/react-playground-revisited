import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Child(props) {
  const theChild = props.children.find(child => (
    child.id === props.match.params.childId
  ))

  if (!theChild) {
    return <Redirect to='/error'/>
  }
  return (
    <div className={`child child__${theChild.id}`}>
      <h2>{theChild.id} Component</h2>
      <p>{theChild.content}</p>
    </div>
  )
}