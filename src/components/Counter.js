import React from 'react'
import { useState, useEffect } from 'react';
import CountNumber from './CountNumber'


//counter logic

// const [counter,setCounter] = useState([{
//     number: 0,
//     time: 'Months'
// },{
//     number: 0,
//     time: 'Days'
// },{
//     number: 0,
//     time: 'Hours'
// },{
//     number: 0,
//     time: 'Minutes'
// }])


function updateCounter(currentDate){
    const wcStartDate = new Date('2030-06-08T00:00:00Z');

    const timeDiff = wcStartDate - currentDate;

    const Months = Math.floor(timeDiff / (1000*3600*24*30));
    let rest = timeDiff % (1000*3600*24*30);

    const Days = Math.floor(rest / (1000*3600*24));
    rest %= (1000*3600*24);

    const Hours = Math.floor(rest / (1000*3600));
    rest %= (1000*3600);

    const min = Math.floor(rest / (1000*60));

    return [{
        number: Months,
        time: 'Months'
    },{
        number: Days,
        time: 'Days'
    },{
        number: Hours,
        time: 'Hours'
    },{
        number: min,
        time: 'Minutes'
    }]

}


function Counter() {

    const currentDate = new Date();
    const [counter, setCounter] = useState(updateCounter(currentDate));


    useEffect(()=>{
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            setCounter(updateCounter(currentDate));
        }, 5000)

        return ()=> clearInterval(intervalId)
    },[])

    const counterList = counter.map((element)=>{
        return <CountNumber number={element.number} time={element.time} key= {element.time}/>
    })








  return (
    <section className='counter--section'>
        <div className='counter'>
            {counterList}
        </div>
    </section>
  )
}

export default Counter