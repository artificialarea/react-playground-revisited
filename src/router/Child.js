import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Child(props) {
  console.log(props); // note it packages 'list' prop into route render props!
  console.log(props.match.params.childId);
  console.log(props.list)
  const { list } = props;
  const child = list.find(item => 
    item.id === props.match.params.childId
  )
  
  // to ensure app doesn't crash but redirects to error route
  // if path '/child/:not-childId' (and thus childId is 'undefined')
  if(!child) {
    return <Redirect to='/child-error'/>
  }
  return (
    <div className='child'>
      <h2>{child.id} Componenent</h2>
      <p>{child.content}</p>
    </div>
  )
}
