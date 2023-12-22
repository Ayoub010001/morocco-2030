import React from 'react'
import PlaceSection from './PlaceSection'
import StadiumInfo from './StadiumInfo'

function PlacesContainer() {
  return (
    <section className='places--container'>
        <main className='places--content'>
            <StadiumInfo />

            <h1>Places To Visite</h1>
            <form>
                <select>
                    <option></option>
                </select>
                <select>
                    <option></option>
                </select>
                <select>
                    <option></option>
                </select>
            </form>

            <PlaceSection />
        </main>
    </section>
  )
}

export default PlacesContainer