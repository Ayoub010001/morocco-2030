import './visitPlaces.css';
import React from 'react'
import { useParams } from 'react-router-dom';
import Cover from '../components/Cover'
import PlacesContainer from '../components/PlacesContainer';
import stadiums from '../assets/stadiums.json'


function VisitPlaces() {
  const { stadiumId } = useParams();

  const allStadiums = stadiums.stadiums;


  const selectedStadium = allStadiums.filter((stadium)=>{
    return stadium.id.toString() === stadiumId.toString();

  })


  return (
    <div>
      <Cover stadiumId={stadiumId} selectedStadium={selectedStadium[0]}/>
      <PlacesContainer stadiumId={stadiumId} Stadium={selectedStadium[0]}/>
    </div>
  )
}

export default VisitPlaces