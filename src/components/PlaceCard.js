import React from 'react'
import Std from '../assets/stadium_ai_3.jfif'

function PlaceCard({place}) {
  return (
    <div className='PlaceCard--Container'>
         <div className='PlaceCard--Img'>
                <div className='badge distance--badge'>
                    <p>{place.distance} km from Stadium</p>
                </div>
                <div className='badge Map--badge'>
                    <p>🗺 Google Maps</p>
                </div>
                <img src={Std} alt='Place'></img>
         </div>
         <div className='PlaceCard--Info'>
                <p className='text-description'>
                {place.description_long}
                </p>
         </div>

    </div>
  )
}

export default PlaceCard