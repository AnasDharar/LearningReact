import React from 'react'

function Card(props = { title: 'Default Title' }) {
  return (
    <div className='bg-amber-500 p-4 rounded-lg shadow-md text-2xl text-red-700'>{props.title}</div>
  )
}
 
export default Card