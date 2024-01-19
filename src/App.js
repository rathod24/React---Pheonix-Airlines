import React from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



import LandingPage from './Pages/LandingPage/LandingPage';
import FlightSearch from './Pages/FlightSearch/FlightSearch';
import UserDetailsPage from './Pages/UserDetailsPage';
import ConfirmationStatus from './Pages/ConfirmationStatus';
import FlightsDisplay from './Pages/FlightsDisplay';
import Header from './Component/Header/Header';

const App = () => {
   
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'exact element={<LandingPage/>}/>
      <Route path='/flight-searchs' element={<FlightSearch/>}/>
      <Route path="/filtered-flights" element={<FlightsDisplay/>}/>
      <Route path='/flight-booking' element={<UserDetailsPage/>}/>
      <Route path='/confirmation' element={<ConfirmationStatus/>}/>
      
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App