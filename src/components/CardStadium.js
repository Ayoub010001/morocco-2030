import React from 'react'
import Button from './Button'
import stadiumOne from '../assets/stadium_ai_1.jfif'

function CardStadium({stadium}) {
  return (
    <div className='CardStadium'>
        <div className='cardImg--section'>
            <img  src={stadiumOne} alt='stadium'/>
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