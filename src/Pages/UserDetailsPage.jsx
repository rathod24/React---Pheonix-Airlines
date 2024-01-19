import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function UserDetailsPage() {

    let flightname = useSelector((state)=>{return state.flightname});
    let navigate = useNavigate();

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

  return (
    <div className='trip-type-card card-inside'>
      <h3>Booking Confirmation for Flight {flightname}</h3>
      <input type='text' value={fname} placeholder='First Name' onChange={(e)=>{setFname(e.target.value)}}/> 
      <input type='text' value={lname} placeholder='Last Name' onChange={(e)=>{setLname(e.target.value)}}/> 
      <input type='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> 
      <input type='tel' value={number} placeholder='Mobile Number' onChange={(e)=>{setNumber(e.target.value)}}/> 
      <button onClick={()=>{navigate("/confirmation")}}>Confirm Booking</button>
    </div>
  )
}

export default UserDetailsPage;