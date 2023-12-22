import React from 'react'
import CardStadium from './CardStadium'
import RightArrow from '../assets/RightArrow.svg'
import LeftArrow from '../assets/LeftArrow.svg'

const prevHandle = () =>{
// card width 250px + gap  40px
    document.getElementById('carousel').scrollLeft -= 290;
}
const nextHandle = () =>{

    document.getElementById('carousel').scrollLeft += 290;
}


function Countries() {
  return (
    <div className='country--section'>
        <h3 className='country--title'>MOROCCO</h3>
        <div className='container-carousel'>
            <div className='wrapper'>
                <div className='sliders'>
                    <div className='slideBtn prev' onClick={prevHandle}>
                        <img src={LeftArrow} alt='icon' width={15}/>
                    </div>
                    <div className='slideBtn next' onClick={nextHandle}>
                        <img src={RightArrow} alt='icon' width={15}/>
                    </div>
                </div>
                <div id='carousel' className='carousel'>
                    <CardStadium />
                    <CardStadium />
                    <CardStadium />
                    <CardStadium />
                    <CardStadium />
                    <CardStadium />
                    <CardStadium />
                    <CardStadium />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Countries