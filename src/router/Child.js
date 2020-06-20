import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Child(props) {

  const theChild = props.children.find(child =>
    child.id === props.match.params.childId
    )
  
  if (!theChild) {
    return <Redirect to='/redirect-error'/>
  }
  return (
    <div className="child">
      <h2>{theChild.name} Node</h2>
      <p>{theChild.content}</p>
    </div>
  )
}