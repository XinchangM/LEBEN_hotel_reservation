import React from 'react'
import getReserved from "../hooks/useReservation";
import getUser from "../hooks/useAuth";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Routes, Route , Link} from 'react-router-dom';
import ReservationItem from '../components/ReservationItem';
import { useState} from "react";
import "../style/UserProfile.css";
import { useAuthToken } from "../context/AuthTokenContext";

const UserProfile = () => {
  const { accessToken } = useAuthToken();
  const [reserve, setReserve] = useState([]);
  const handleClick = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/api/reservations/user`, 
        { headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }); 
        const reservation = await data.json();
        setReserve(reservation);
  };
  console.log(reserve);


  const { user, loading, error}  = getUser();
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">


        <div className="listSearch">
          {loading ? (
              "Loading please wait"
            ) : (
              <>
            {[user].map((userItem) => (
              <div className="userInfo" key = { userItem.id } >
                  <img src="https://images.pexels.com/photos/13174596/pexels-photo-13174596.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt = ""
                    className="profile"
                  ></img>
                <div className="userName"> {userItem.name}</div>
                <div className="userCity"> {userItem.city} </div>
                <button className='userButton' onClick={handleClick} >My Reservations</button>
              </div>
                ))}
              </>
              )}
              </div>
          
       
        <div className="listResult">
            {reserve.map((item) => (
                  <ReservationItem item={item} key={item.id} />
                ))}
            </div>

        </div>
      </div> 

      
      </div>

    
    )
}
export default UserProfile;