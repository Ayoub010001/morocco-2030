import React from 'react'
import Button from './Button'

function CardStadium({stadium}) {
  return (
    <div className='CardStadium'>
        <div className='cardImg--section'>
            <img  src={stadium.image[0]} alt='stadium' height="100%"/>
        </div>
        <div className='cardInfo--section'>
            <h3>{stadium.name}</h3>
            <p>City : <span>{stadium.city}</span></p>
            <p>Capacity : <span>{stadium.capacity}</span></p>
        </div>
        <Button stadiumId={stadium.id}/>
    </div>
  )
}

export default CardStadium