import React from 'react'
import CountNumber from './CountNumber'

const timeLeft = [{
    number: 72,
    time: 'Months'
},{
    number: 20,
    time: 'Days'
},{
    number: 13,
    time: 'Hours'
},{
    number: 10,
    time: 'Min'
}]

const counterList = timeLeft.map((element)=>{
    return <CountNumber number={element.number} time={element.time} key= {element.time}/>
})

function Counter() {
  return (
    <section className='counter--section'>
        <div className='counter'>
            {counterList}
        </div>
    </section>
  )
}

export default Counter