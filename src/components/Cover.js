import React from 'react'

function Cover({selectedStadium}) {

  return (
    <div className='cover--Section'>
        <img src={selectedStadium.image[0]} alt="stadium"></img>
    </div>
  )
}

export default Cover