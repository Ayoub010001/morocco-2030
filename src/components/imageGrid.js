import React from 'react'

function imageGrid({stadium}) {

  return (
    <div className='imageGrid--container'>
        <div className='imgGrid mainImgGrid'>
          <img src={stadium.image[0]} alt='stadium' height={'100%'} width={'100%'}></img>
        </div>

        <div className='imgGrid'>
          <img src={stadium.image[1]} alt='stadium' height={'100%'} width={'100%'}></img>
        </div>

        <div className='imgGrid'>
          <img src={stadium.image[2]} alt='stadium' height={'100%'} width={'100%'}></img>
        </div>
    </div>
  )
}

export default imageGrid