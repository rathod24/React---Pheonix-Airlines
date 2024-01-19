import React from 'react';

import './Header.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
        <nav onClick={()=>navigate("/")}>
        <ion-icon name="home" id="icon"></ion-icon>
        </nav>
        <h2>Flight Booking</h2>
        
    </header>
    
  )
}

export default Header