import React from 'react'
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate=useNavigate()
  return (
    <div className='home-bg'>
      <button onClick={()=>navigate('/flight-searchs')}>
      Search Flights
      </button>
    </div>
    
   
    
  )
}

export default LandingPage