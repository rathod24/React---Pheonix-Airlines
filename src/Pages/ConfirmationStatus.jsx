import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ConfirmationStatus() {
    let reduxdata = useSelector((state)=>{return state});
    console.log(reduxdata)
    let navigate = useNavigate();
  return (
    <div className='trip-type-card card-inside'>
      <h3>Thankyou for Booking Click below button to return to Home Page</h3>
      <h4>Your Booking Details Are :</h4>
      <p>
        <p>Flight Name : {reduxdata.flightname}</p>
        <p>Source : {reduxdata.from}</p>
        <p>Destination : {reduxdata.to}</p>
        <p>Journey Date : {reduxdata.date}</p>
        <p>Trip Type : {reduxdata.radio}</p>
      </p>
      <button onClick={()=>{navigate("/")}}>Back to Home</button>
    </div>
  )
}

export default ConfirmationStatus