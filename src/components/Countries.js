import React from 'react'
import CardStadium from './CardStadium'
import RightArrow from '../assets/RightArrow.svg'
import LeftArrow from '../assets/LeftArrow.svg'



function Countries({country, stadiums}) {

    const carouselId = `carousel-${country}`;


    const prevHandle = () =>{
        // card width 250px + gap 40px
        const carouselElement = document.getElementById(carouselId);
        if (carouselElement) {
          carouselElement.scrollLeft -= 290;
        }
    }
    const nextHandle = () =>{
        const carouselElement = document.getElementById(carouselId);
        if (carouselElement) {
          carouselElement.scrollLeft += 290;
        }
    }


  return (
    <div className='country--section'>
        <h3 className='country--title'>{country}</h3>
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
                <div id={carouselId} className={`carousel`}>
                    {
                        stadiums.map((stadium)=>{
                            return <CardStadium stadium={stadium} key={stadium.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
        
  )
}
export default Countries