import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Button({stadiumId}) {
  return (
    <Link to={`/VisitPlaces/${stadiumId}`}>
          <button className='main--button'>
              Places to visit
          </button>
    </Link>
  )
}

export default Button