import React from 'react'
import Tag from './Tag'
import ImageGrid from './imageGrid'

function StadiumInfo({selectedStadium}) {


  return (
    <section className='stadium--section'>
        <h1>{selectedStadium.name}</h1>
        <h3>{selectedStadium.country}, {selectedStadium.city}</h3>
        <div className='tags--section'>
            <Tag tagName={"Location"} tagValue={selectedStadium.city}/>
            <Tag tagName={"Capacity"} tagValue={selectedStadium.capacity}/>
            <Tag tagName={"Opened"} tagValue={selectedStadium.opened}/>
        </div>
        <p>
          {selectedStadium.description}
        </p>
        <ImageGrid stadium={selectedStadium}/>
    </section>
  )
}

export default StadiumInfo