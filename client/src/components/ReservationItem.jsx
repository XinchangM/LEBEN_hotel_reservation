import React from 'react'
import "../style/reservationItem.css";
import { useState } from "react";
import { useAuthToken } from "../context/AuthTokenContext";
import ReservationForm from '../components/ReservationForm';

const Reservationitem = ({ item }) => {
  const { accessToken } = useAuthToken();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const id =item.id;

  const handleClick = () => {
    setOpenModal(true);
  };
  const handleDelete = async () => {
    try{
      fetch(`${process.env.REACT_APP_API_URL}/api/reservations/${id}`, {method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
        }).then(response => {
          const data = response.json();

          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
        })
        
    } catch(error) {};
  };
  

  return (
    <div className="reItem">
    <div className="reDesc">
      <h1 className="reContent">{item.content}</h1>
        <span className="reRoom">Room Number: {item.roomNumber}</span>
        <span className="reDate">{item.dateIn.substring(0,10)} - {item.dateOut.substring(0,10)} </span>
        <div className='rWrapper'>
          <button onClick={handleClick} className="rButton"> Change </button> 
          <button onClick={handleDelete} className="rButton"> Delete </button> 
        </div>
    </div>
    {openModal && <ReservationForm setOpen={setOpenModal} itemId={item.id}/>}
  </div>
  )
}

export default Reservationitem;