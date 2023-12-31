import React from 'react'
import Mascot from '../assets/mascot_wc30.png'
import bgMascot from '../assets/bg_mascot.png'

function Hero() {
  return (
    <section className='hero'>
        <div className='Hero-section'>
            <div className='Hero-main'>
              {/*
                <h1>Discover new places to visit</h1>*/}
                <h1 className="welcome"> WELCOME TO</h1>
                <h1 className='visit2030'>Visit2030</h1>
                <p>Four Years After USA-2026, FWC is Back. and we will assist you to discover new places near to stadium in Morocco, Spain and Portugal during the world cup 2030.</p>
            </div>

            <div className='Hero-img'>
                <img className='bg--mascot'src={bgMascot} alt="background"/>
                <img className='mascot' src={Mascot} alt='mascot'/>
            </div>

        </div>
    </section>
  )
}

export default Hero