import React from 'react'
import Tag from './Tag'
import ImageGrid from './imageGrid'

function StadiumInfo() {
  return (
    <section className='stadium--section'>
        <h1>Mohammed V stadium</h1>
        <h3>Morocco, Benslimane</h3>
        <div className='tags--section'>
            <Tag />
            <Tag />
            <Tag />
        </div>
        <p>
        The grand Stade de Casablanca is the largest stadium in Africa and the second largest in the world, is endowed with a capacity of up to 115,000 seats to accommodate all forms of mass sports and cultural events, and designed in compliance with the latest requirements of international football, specifically the standards of FIFA 2030
        </p>
        <ImageGrid />
    </section>
  )
}

export default StadiumInfo