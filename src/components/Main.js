import React from 'react'
import Countries from '../components/Countries'
import stadiums from '../assets/stadiums.json'

const allStadiums = stadiums.stadiums;

const morStadiums = allStadiums.filter((stadium)=>{
      return stadium.country === "Morocco";
})

const spaStadiums = allStadiums.filter((stadium)=>{
  return stadium.country === "Spain";
})

const porStadiums = allStadiums.filter((stadium)=>{
  return stadium.country === "Portugal";
})

// console.log(morStadiums)
// console.log(spaStadiums)
// console.log(porStadiums)

function Main() {
  return (
    <section className='Main--section'>
        <h1>World Cup hots Stadiums</h1>
        <Countries country="MOROCCO" stadiums={morStadiums} />
        <Countries country="SPAIN" stadiums={spaStadiums} />
        <Countries country="PORTUGAL" stadiums={porStadiums} />
    </section>
  )
}

export default Main