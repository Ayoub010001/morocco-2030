import React from 'react'
import stadium1 from '../assets/stadium_ai_1.jfif'
import stadium2 from '../assets/stadium_ai_2.jfif'
import stadium3 from '../assets/stadium_ai_3.jfif'

function imageGrid() {
  return (
    <div className='imageGrid--container'>
        <div className='imgGrid mainImgGrid'>
          <img src={stadium1} alt='stadium'></img>
        </div>

        <div className='imgGrid'>
          <img src={stadium2} alt='stadium'></img>
        </div>

        <div className='imgGrid'>
          <img src={stadium3} alt='stadium'></img>
        </div>
    </div>
  )
}

export default imageGrid