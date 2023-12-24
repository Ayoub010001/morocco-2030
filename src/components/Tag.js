import React from 'react'

function Tag({tagName, tagValue}) {
  return (
    <div className='tag--card'>
        <p className='tag--label'>{tagName}</p>
        <p className='tag--data'>{tagValue}</p>
    </div>
  )
}

export default Tag