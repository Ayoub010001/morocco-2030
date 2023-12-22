import React from 'react'
import Button from './Button'
import stadiumOne from '../assets/stadium_ai_1.jfif'

function CardStadium() {
  return (
    <div className='CardStadium'>
        <div className='cardImg--section'>
            <img  src={stadiumOne} alt='stadium'/>
        </div>
        <div className='cardInfo--section'>
            <h3>Mohammed V Stadium</h3>
            <p>City : <span>Rabat</span></p>
            <p>Capacity : <span>115000</span></p>
        </div>
        <Button />
    </div>
  )
}

export default CardStadium