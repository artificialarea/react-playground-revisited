/* 
archived intial approach
importing list store.js directly
instead of passing state/props from parent
*/

import React from 'react'
import list from './store' // reiterate to to pass props instead

export default function Child(props) {
  console.log(props);
  console.log(props.match.params.childId);
  const child = list.find(item => 
    item.id === props.match.params.childId
  )

  return (
    <div className='child'>
      <h2>{child.id} Componenent</h2>
      <p>{child.content}</p>
    </div>
  )
}
