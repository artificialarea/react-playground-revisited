import React from 'react'

export default function Child(props) {
  console.log(props); // note it packages 'list' prop into route render props!
  console.log(props.match.params.childId);
  console.log(props.list)
  const { list } = props;
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
