import React from 'react'
import PlaceCard from './PlaceCard'

function PlaceSection({place}) {
  return (
    <section className='place--section'>
      <h3>{place.name}</h3>
      <div className='category--section'>
          {place.category.map((category,index)=>{
            return (<div className='badge categoty--badge' key={index}>
              <p>{category}</p>
            </div>)
          })}
      </div>
      <PlaceCard place={place}/>
    </section>
  )
}

export default PlaceSection