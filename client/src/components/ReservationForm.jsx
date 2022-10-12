import React from 'react'
import { useAuthToken } from "../context/AuthTokenContext";
import "../style/header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export default function ReservationForm ({setOpen, itemId}) {
  const { accessToken } = useAuthToken("");
  const [contents, setContents] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [people, setPeople] = useState();



  
  const peopleInt = parseInt(people);

  console.log(peopleInt);
  console.log(contents);
  

  const handleSubmit =async () => {
    try{
      const respose = fetch(`${process.env.REACT_APP_API_URL}/api/reservations/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
          body: JSON.stringify({
            content: contents,
            dateIn: checkin,
            dateOut: checkout,
            peoplNum: peopleInt,
          }),
        })
        if(respose){
          window.alert("Reservation Updated")
          setOpen(false);
        }
  
    } catch(error) {};

  }
  return (
    <div classname = "form">

        <form className= 'reservation' 
          onSubmit={handleSubmit}>

        <ul className='wrapper'> 
        <li class="form-row">
          <span className='reContent'> Content </span>
        <input
            type="text"
            placeholder="Reservation Memo"
            className="reservationInput"
            required
            onChange={(e) => setContents(e.target.value)}
            />
          </li>
          <li class="form-row">
          <span className='date'> Check In Date </span>
          <input
            type="text"
            placeholder="Reservation Memo"
            className="reservationInput"
            required
            onChange={(e) => setCheckin(e.target.value)}
            />
          </li>
          <li class="form-row">
          <span className='date'> Check Out Date </span>
          <input
            type="text"
            placeholder="Reservation Memo"
            className="reservationInput"
            required
            onChange={(e) => setCheckout(e.target.value)}
            />
          </li>
          <li class="form-row">
          <span className='date'> People </span>
          <input
            type="text"
            placeholder="Reservation Memo"
            className="reservationInput"
            required
            onChange={(e) => setPeople(e.target.value)}
            />
          </li>
          <li class="form-row">
          <button className='submit' onClick={handleSubmit}> Submit </button>  
          </li>
        </ul>
      </form>
      </div>

  )
}
