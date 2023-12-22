import React from 'react'

export default function CountNumber(props) {
  return (
    <div className='countNumBox'>
        <h2 className='countNumber'>{props.number}</h2>
        <p className='countTime'>{props.time}</p>
    </div>

  )
}
