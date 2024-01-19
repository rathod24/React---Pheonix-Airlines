import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './FlightSearch.css'
import { journeyData } from "../../redux/actions/actionCreator";

function FlightSearch () {

    let dispatch = useDispatch();

    let data = useSelector((state)=>{return state})
    
    const [radio,setRadio] = useState("");
    const [from,setFrom]= useState("");
    const [to,setTo] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate]=useState('')
    const [search,setSearch] = useState(false);
    const [round,setRound]=useState(false)

    let navigate = useNavigate();
    const searchclicked = ()=>{


        if(radio && startDate && from && to)
        {
          console.log(radio,from,to,startDate,endDate);
          if(round){
            dispatch(journeyData({radio,from,to,startDate,endDate}));
          }else dispatch(journeyData({radio,from,to,startDate}));

          setSearch(true);
        }
        else {
            alert("All the fields are required");
            setSearch(false);
        }
    }
   function radioHandler(e){
    setRadio(e.target.value)
  
   }
    return (
        <div className="trip-type-card" >
           {!search && <div className="card-inside">
            <div className="radio-radio-gap">
                <div className="radio-label-gap">
                <input type="radio" name="radiobtn" id="oneway" value={"One Way"} onChange={(e)=>{radioHandler(e);setRound(false)}}/>
                <label htmlFor="oneway">One Way Trip</label>
                </div>
                <div className="radio-label-gap">
                <input type="radio" name="radiobtn" id="round" value={"Round Trip"} onChange={(e)=>{radioHandler(e);setRound(true)}}/>
                <label htmlFor="round">Round Trip</label> 
                </div>
            </div>
            

            <input type="text" placeholder="Source City" value={from} onChange={(e)=>{setFrom(e.target.value)}}/> 
            <input type="text" placeholder="Destination City" value={to} onChange={(e)=>{setTo(e.target.value)}}/> 
            <input type="date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}/>
            {round?<input type="date" value={endDate} onChange={(e)=>{setEndDate(e.target.value)}} name="" id="" />:null}
            <button onClick={searchclicked}>Search Flight</button>
            </div> }
            {search && <div className="card-inside">
                <button onClick={()=>{setSearch(false)}}>Search Flight</button>
                
                       <div className="flight-details">
                        <div>
                            <p> Departure</p>
                            <p> 12:00</p>
                        </div>
                        <div>
                            <p>Air India</p>
                            <p>AI-275</p>
                        </div>
                        <div>
                            <p>Journey Time</p>
                            <p>1 Hr 25 Min</p>
                        </div>
                        <div>Rs.3,600</div>
                        <button onClick={()=>{dispatch(journeyData({...data,flightname:"Air India AI-275"})); navigate("/flight-booking")}}>Book Now</button>
                       </div>
                       <div className="flight-details">
                       <div>
                            <p> Departure</p>
                            <p> 4:00</p>
                        </div>
                        <div>
                            <p>Kingfisher</p>
                            <p>KF-183</p>
                        </div>
                        <div>
                            <p>Journey Time</p>
                            <p>1 Hr </p>
                        </div>
                        <div>Rs.3000</div>
                        <button onClick={()=>{dispatch(journeyData({...data,flightname:"Kingfisher Airlines KF-183"})); navigate("/flight-booking")}}>Book Now</button>
                       </div>
                </div>}
        </div>
    )
}

export default FlightSearch;