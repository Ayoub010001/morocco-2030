import React from 'react'
import logo from '../assets/logo_wc30.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


function Nav() {
  return (
    <header>
      <Link to={`/`}>
          <img src={logo} width={60} alt='logo wc2030'/>
      </Link>
    </header>
  )
}

export default Nav